const express = require('express');
const router  = express.Router();
const sendMail = require("../email/sendMail");
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post("/send-email", (req, res) => {
  const {email, subject, message} = req.body;
  
  sendMail(email, subject, message)
  .then(info => {
    console.log(info);
    res.render('message', {email, subject, message, info})})
  .catch(error => console.log(error));

})
module.exports = router;
