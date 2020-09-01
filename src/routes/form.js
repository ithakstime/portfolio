const express = require("express");
const router = express.Router();

const Form = require("./src/models/forms");

//REQUEST GET FOR ALL ARTICLES
router.get("/", (req, res) => {
  Form.find()
    .then((form) => res.json(form))
    .catch((err) => res.status(400).json(`Error: $(err)`));
});

//REQUEST TO ADD NEW FORM
router.post("/add", (req, res) => {
  const newForm = new Form({
    name: { type: String, required: true },
    emailid: { type: String, required: true },
    country: { type: String, required: true },
    mobileno: { type: String, required: true },
    company: { type: String, required: true },
    inquiry: { type: String, required: true },
  });
  newForm
    .save()
    .then(() => res.json("the new form response is added successfully!!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
