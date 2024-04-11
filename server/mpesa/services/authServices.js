const { get } = require('axios');
const { consumerKey, consumerSecret } = require('../config');

async function getOAuthToken() {
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
    const auth = 'Basic ' + Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

    try {
        const response = await get(url, { headers: { Authorization: auth } });
        return response.data.access_token;
    } catch (error) {
        console.error('Error obtaining OAuth token:', error);
        throw error;
    }
}

module.exports = { getOAuthToken };
