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

    subject: name,
    text: name,
    html: `<p>Hello User you have been rejected check with your credencials ..</p>`,
  });
  console.log("Message sent: %s", info.messageId);
  // res.json({info});
};

export default DenyMail;
