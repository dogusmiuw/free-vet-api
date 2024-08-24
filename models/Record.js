const mon = require('../db');
const { Schema } = mon;

const s = new Schema({
  name: {
    type: String,
    default: "Bilinmiyor"
  },
  city: {
    type: String,
    default: "Bilinmiyor"
  },
  district: {
    type: String,
    default: "Bilinmiyor"
  },
  address: {
    type: String,
    default: "Bilinmiyor"
  },
  phone: {
    type: String,
    default: "Bilinmiyor"
  },
  workingHours: {
    type: String,
    default: "Bilinmiyor"
  },
  operationType: String,
  price: number
}, {
  timestamps: true
});

const Record = mon.model('Record', s);

module.exports = Record;