const catchAsyncErrors = require('./catchAsyncErrors');
const ErrorHander = require('../utils/errorhander');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {

  const {
    token
  } = req.cookies;

  if (!token) {
    return next(new ErrorHander("Please login first..."));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);
  next();

});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not authorized to access this resource`, 403
        )
      );
    }
    next();
  };
};
