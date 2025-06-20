import nodemailer from 'nodemailer';

export const sendMail = async (to: string, subject: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // generated app password
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to, // you can change this to the recipient's email
    subject,
    text: `${message}`,
    html: `<div style="white-space: pre-wrap;">${message}</div>`,
  };

  await transporter.sendMail(mailOptions);
}
