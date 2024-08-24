const mon = require('mongoose');

mon.connect(process.env.DB_URL).
  catch(error => handleError(error));

module.exports = mon;