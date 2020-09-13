const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "b1ea06320ea00ae9c931935cb125e909-0f472795-9d5ecd8c",
    domain: "sandbox9f448998d4da4e8f8776fed570114c96.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
  from: "it.haksinterlance@gmail.com",
  to: "jsafroze@gmail.com",
  subject: "Testing",
  text: "Test",
};

transporter.sendMail(mailOptions, function(err, data) {
  if (err) {
    console.log("error occured");
  } else {
    console.log("Mail sent!");
  }
});
