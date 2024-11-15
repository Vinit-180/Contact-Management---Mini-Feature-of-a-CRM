const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  enable:{
    type:Boolean,
    default:true
  }
});

module.exports = mongoose.model("Contact", contactSchema);
