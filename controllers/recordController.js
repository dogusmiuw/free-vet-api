const express = require("express");
const r = express.Router();
const R = require('../models/Record');

r.get("/", async (req, res) => {
  try {
    const data = await R.find();
    return res.status(200).json(data);
  } catch (err) {
    throw new Error(err.message);
  }
});

r.post("/add", async (req, res) => {
  try {
    const {
      name,
      city,
      district,
      address,
      phone,
      workingHours,
      operationType,
      price
    } = req.body;

    const data = await R.create(
      {
        name,
        city,
        district,
        address,
        phone,
        workingHours,
        operationType,
        price
      }
    );

    return res.status(200).json(data);
  } catch (err) {
    throw new Error(err.message);
  }
});

module.exports = r;