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
