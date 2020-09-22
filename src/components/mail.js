require("dotenv").config();
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

console.log(process.env);

const sendMail = (name, emailid, country, mobileno, company, inquiry, cb) => {
  let mailOptions = {
    from: emailid,
    to: "haksinterlance@gmail.com",
    subject: name,
    text:
      "\n Country = " +
      country +
      "\n Mobileno= " +
      mobileno +
      "\n Company= " +
      company +
      "\n Email= " +
      emailid +
      "\n Inquiry= " +
      inquiry,
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
