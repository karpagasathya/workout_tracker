const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", { useNewUrlParser: true });




module.exports = router;
