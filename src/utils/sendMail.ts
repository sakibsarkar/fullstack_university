import nodemailer from "nodemailer";
import Config from "../config";

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com.",
    port: 587,
    secure: Config.nodeEnv === "production",
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: Config.mail,
      pass: Config.mailPass,
    },
  });

  await transporter.sendMail({
    from: Config.mail, // sender address
    to, // list of receivers
    subject: "Reset your password within ten mins!", // Subject line
    text: "", // plain text body
    html, // html body
  });
};
