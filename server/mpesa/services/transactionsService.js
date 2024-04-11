const { post } = require('axios');
const { getOAuthToken } = require('./authServices');
const { shortCode, passkey } = require('../config');

function generateTimestamp() {
    return new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
}

function generatePassword(timestamp) {
    return Buffer.from(`${shortCode}${passkey}${timestamp}`).toString('base64');
}

async function initiateC2BTransaction(amount, phoneNumber) {
    const token = await getOAuthToken();
    const timestamp = generateTimestamp();
    const password = generatePassword(timestamp);
    const url = 'https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate';

    const data = {
        ShortCode: shortCode,
        CommandID: 'CustomerPayBillOnline',
        Amount: amount,
        Msisdn: phoneNumber.startsWith('254') ? phoneNumber : `254${phoneNumber.substring(phoneNumber.length - 9)}`,
        BillRefNumber: 'account123', // Ideally, this should be dynamically determined based on the transaction
        Timestamp: timestamp,
        Password: password,
    };

    try {
        const response = await post(url, data, { headers: { Authorization: `Bearer ${token}` } });
        console.log('C2B Transaction initiated:', response.data);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error initiating C2B Transaction:', error.response ? error.response.data : error);
        return { success: false, error: 'Failed to initiate payment', details: error.response ? error.response.data : error };
    }
}

module.exports = { initiateC2BTransaction };
