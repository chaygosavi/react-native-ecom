import ErrorHandler, { asyncError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const isAuthenticated = asyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("User Not Logged In", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  console.log("<<<<<<< ", req, " >>>>>>>");

  req.user = await User.findById(decodedData._id);

  console.log("<<<<<<< ", req.user, " >>>>>>>");

  next();
});
