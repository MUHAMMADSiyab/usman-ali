const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

/**
 * @GET
 */
router.get("/send-mail", (req, res) => {
  res.render("mails");
});

/**
 * @POST
 */
router.post("/send", async (req, res) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "", // generated ethereal user
        pass: "", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Xplode Tech 👻" <siyab.dev@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.message, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
  
    res.send("Mail sent !")

});

module.exports = router;
