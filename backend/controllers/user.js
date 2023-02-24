import { User } from "../models/user.js";
import ErrorHandler, { asyncError } from "../utils/error.js";
import { getDataUri, sendToken } from "../utils/features.js";
import cloudinary from "cloudinary";

export const login = asyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!password) {
    next(new ErrorHandler("Please Enter Old Password and New Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Incorrect Email or Password", 400));
  }
  const isMatched = await user.comparePassword(password);
  if (!isMatched) {
    return next(new ErrorHandler("Incorrect Email or Password", 400));
  }

  sendToken(user, res, "Welcome back, " + user.name, 200);
});
export const signup = asyncError(async (req, res, next) => {
  const { name, email, password, address, city, country, pinCode } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    return next(new ErrorHandler("User Already Exists", 400));
  }

  let avatar = undefined;

  if (req.file) {
    // console.log(req.file);
    const file = getDataUri(req.file);

    //   Cloudinary
    const myCloud = await cloudinary.v2.uploader.upload(file.content);
    avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }

  // console.log(myCloud.secure_url);
  user = await User.create({
    avatar,
    name,
    email,
    password,
    address,
    city,
    country,
    pinCode,
  });
  sendToken(user, res, "Registered Successfully", 201);
});

export const logOut = asyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      secure: process.env.NODE_ENV === "Development" ? false : true,
      httppOnly: process.env.NODE_ENV === "Development" ? false : true,
      sameSite: process.env.NODE_ENV === "Development" ? false : "none",
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});

export const getMyProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

export const updateProfile = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const { name, email, address, city, country, pinCode } = req.body;

  if (name) user.name = name;
  if (email) user.email = email;
  if (address) user.address = address;
  if (city) user.city = city;
  if (country) user.country = country;
  if (pinCode) user.pinCode = pinCode;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully",
  });
});

export const changePassword = asyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user._id).select("+password");

  if (!oldPassword || !newPassword) {
    next(new ErrorHandler("Please Enter Old Password and New Password", 400));
  }

  const isMatched = await user.comparePassword(oldPassword);

  if (!isMatched) {
    next(new ErrorHandler("Incorrect Old Password", 400));
  }

  user.password = newPassword;

  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
  });
});

export const updatePic = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  // console.log(req.file);
  const file = getDataUri(req.file);
  console.log("file", file);

  await cloudinary.v2.uploader.destroy(user.avatar.public_id);
  //   Cloudinary
  const myCloud = await cloudinary.v2.uploader.upload(file.content);
  console.log("link", file.content);

  user.avatar = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

  await user.save();

  res.status(200).json({
    success: true,
    message: "Avatar Updated Successfully",
  });
});

export const forgetPassword = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

export const resetPassword = asyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});
