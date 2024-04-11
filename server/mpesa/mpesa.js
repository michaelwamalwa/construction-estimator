const { initiateC2BTransaction } = require('./services/transactionsService');

// Example usage
initiateC2BTransaction(100, '254110179220')
  .then(result => console.log(result))
  .catch(error => console.error(error));
