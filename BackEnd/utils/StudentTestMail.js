import nodeMailer from 'nodemailer';

const StudentTestMail = async (studentMail) => {
  let testAccount = await nodeMailer.createTestAccount();
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mohantheboss1432@gmail.com',
      pass: 'llnz zvkz lrdc tpxe',
    },
  });

  let info = await transporter.sendMail({
    from: '"Mohan kumar" <mohantheboss1432@gmail.com>',
    to: studentMail,
    subject: 'Account Creation Confirmation',
    text: `Dear Student,

Thank you for submitting your form for account creation. We have received your credentials and will get back to you within 24 hours.

Best regards,
Mohan Kumar`,
    html: `<p>Dear student,</p><p>Thank you for submitting your form for account creation. We have received your credentials , we will verify your credentials  and will get back to you within 24 hours,  stay tuned. </p><p>Best regards,<br/>Mohan Kumar</p>`,
  });
  console.log("Message sent: %s", info.messageId);
  // res.json({info});
}

export default StudentTestMail;
