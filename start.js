const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const sendMail = require("./src/components/mail");

const URI =
  "mongodb+srv://ithaksinterlance:hakshaencryptcipher@cluster0.x3gjs.mongodb.net/test?retryWrites=true&w=majority";
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected successfully");
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/hakstime", function(req, res) {
  var name = req.body.name;
  var emailid = req.body.emailid;
  var country = req.body.country;
  var mobileno = req.body.mobileno;
  var company = req.body.company;
  var inquiry = req.body.inquiry;

  var FormSchema = mongoose.Schema({
    name: String,
    emailid: String,
    country: String,
    mobileno: Number,
    company: String,
    inquiry: String,
  });

  var Form = mongoose.model("formData", FormSchema, "forms");

  var form1 = new Form({
    name: name,
    emailid: emailid,
    country: country,
    mobileno: mobileno,
    company: company,
    inquiry: inquiry,
  });

  form1.save(function(err, data) {
    if (err) {
      res.send({ status: 0, result: data });
    } else {
      res.send({ status: 1, result: data });
    }
  });

  //name, emailid, country, mobileno, company, inquiry

  sendMail(name, emailid, country, mobileno, company, inquiry, function(
    err,
    data
  ) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      Swal.fire("Email sent sucessfully!");
    }
  });
});

app.listen(port, () => console.log(`The app is running in port: ${port}`));
connectDB();
