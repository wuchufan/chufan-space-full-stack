const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer')

//@route GET api/send-email
//@desc sending email
//@access Public

router.post('/', async(req,res)=>{
  let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          // Sender's account
          user: process.env.SEND_EMAIL_USER,
          pass: process.env.SEND_EMAIL_PASS
      }

  });
  let mailOptions = {
      // Recipient's account
      to: process.env.SEND_EMAIL_RECIPIENT,
      subject: 'Chufan Space Message',
      text: req.body.message

  };
  try{
    let info = await transporter.sendMail(mailOptions);
    console.log(`Mail sent to: ${info.messageId}`);
    res.end()

  } catch(error){

    console.log(error.message);
    res.status(500).json({msg:'Server Error, message not sent'});
  }



});


module.exports = router;
