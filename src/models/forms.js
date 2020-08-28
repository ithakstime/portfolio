const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const formSchema = new Schema({
  name: { type: String, required: true },
  emailid: { type: String, required: true },
  country: { type: String, required: true },
  mobileno: { type: String, required: true },
  company: { type: String, required: true },
  inquiry: { type: String, required: true },
});

const Response = mongoose.model("Form", formSchema);
module.exports = Response;
