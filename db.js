const mon = require('mongoose');

mon.connect(process.env.DB_URL).
  catch(error => console.log(error));

module.exports = mon;