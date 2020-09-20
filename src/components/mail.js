require("dotenv").config();
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    type: "OAuth2",
    user: "it.haksinterlance@gmail.com",
    clientId:
      "334096044223-nb2lk25sbfm27b5phhf3mv89fjmu2lap.apps.googleusercontent.com",
    clientSecret: "2sABWYCsttvRkwtcI2BMC46G",
    refreshToken:
      "1//04NS8_It5VYMhCgYIARAAGAQSNwF-L9IrCuYO1qVWmzLNk0cGafm5ykpazObOmB2GV4Hnyy5MwGfNuZwmMPbLXFCq1tVc3ZsKqZY",
  },
});

const sendMail = (name, emailid, country, mobileno, company, inquiry, cb) => {
  let mailOptions = {
    from: emailid,
    to: "jsafroze@gmail.com",
    subject: name,
    text:
      "Country = \n" +
      country +
      "Mobileno= \n" +
      mobileno +
      "Company= \n" +
      company +
      "Email= \n" +
      emailid +
      "&Inquiry= \n" +
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
