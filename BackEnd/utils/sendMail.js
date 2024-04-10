import nodeMailer from "nodemailer";
const sendMail = async (userName, name) => {
  let testAccount = await nodeMailer.createTestAccount();
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohantheboss1432@gmail.com",
      pass: "llnz zvkz lrdc tpxe",
    },
  });

  let info = await transporter.sendMail({
    from: '"Mohan kumar 👻" <mohantheboss1432@gmail.com>',
    to: userName,
    subject: "Successful verification",
    text: "Verification Successful and You are Ready to explore our Website",
    html: `<p>Congradulations  ${name} your request for creating account in our website CricElevate you have been verified and noe you are ready to Sign In. All the very Best</p>`,
  });
  console.log("Message sent: %s", info.messageId);
  // res.json({info});
};

export default sendMail;
