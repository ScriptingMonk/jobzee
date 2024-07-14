export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  console.log("token generated");
  const cookieOptions= { httpOnly: true, expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), sameSite: "none", secure: true }
  const localCookieOptions = {
    httponly: true,
    secure: false,
  }
  console.log("token sent");
  res.status(statusCode).cookie("token", token, cookieOptions).json({
    success: true,
    user,
    message,
    token,
  });
};
