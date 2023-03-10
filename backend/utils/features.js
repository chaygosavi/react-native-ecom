import DataUriParser from "datauri/parser.js";
import path from "path";
import { createTransport } from "nodemailer";

export const sendToken = (user, res, message, statusCode) => {
  const token = user.generateToken();

  return res
    .status(statusCode)
    .cookie("token", token, {
      secure: process.env.NODE_ENV === "Development" ? false : true,
      httppOnly: process.env.NODE_ENV === "Development" ? false : true,
      sameSite: process.env.NODE_ENV === "Development" ? false : "none",
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    })
    .json({
      success: true,
      message,
    });
};

export const getDataUri = (file) => {
  console.log("file >", file);
  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

export const sendEmail = async (subject, to, text) => {
  const transporter = createTransport({});

  await transporter.sendMail({
    to,
    subject,
    text,
  });
};
