const express = require("express");
const router = express.Router();

const Form = require("../models/forms");

//REQUEST GET FOR ALL FORM
router.get("/", (req, res) => {
  Form.find()
    .then((form) => res.json(form))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//REQUEST TO ADD NEW FORM
router.post("/add", (req, res) => {
  const newForm = new Form({
    name: req.body.name,
    emailid: req.body.emailid,
    country: req.body.country,
    mobileno: req.body.mobileno,
    company: req.body.company,
    inquiry: req.body.inquiry,
  });
  newForm
    .save()
    .then(() => res.json("the new form response is added successfully!!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
