import nodeMailer from "nodemailer";
const DenyMail = async (userName, name) => {
  let testAccount = await nodeMailer.createTestAccount();
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohantheboss1432@gmail.com",
      pass: "llnz zvkz lrdc tpxe",
    },
  });

  let info = await transporter.DenyMail({
    from: '"Mohan kumar 👻" <mohantheboss1432@gmail.com>',
    to: userName,

    subject: "Account Rejection",
    text: "Dear User, Your account creation request has been rejected. Please review your credentials and try again. Best regards, Mohan Kumar",
    html: `<p>Hey ${name} as you have been applied in our website CricElevate for creating an account and you Have been rejected Kindly Check your credentials and try again make sure you are giving the right credentials</p>`,
  });
  console.log("Message sent: %s", info.messageId);
  // res.json({info});
};

export default DenyMail;
