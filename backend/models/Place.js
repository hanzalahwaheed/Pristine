const mongoose = require("mongoose");

const { Schema } = mongoose;
const PlaceSchema = new Schema({
  addressTitle: {
    type: String,
    required: true,
  },
  addressDetails: {
    type: String,
    required: true,
  },
  addressImg: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  reporterId: {
    type: String,
  },
  cleanerId: {
    type: String,
  },
  isCertificate: {
    type: Boolean,
  },
  cleanImg: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Place", PlaceSchema);
