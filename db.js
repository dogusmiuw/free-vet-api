const mon = require('mongoose');

mon.connect(process.env.DB_URL).
  catch(error => console.log("could not connect mongodb"));

module.exports = mon;