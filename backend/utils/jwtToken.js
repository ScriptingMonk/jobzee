export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  console.log("token generated");
  const options = {
    expires:new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    httpOnly: true,
    secure:true
  };
  console.log("token sent");
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
