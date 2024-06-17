const errorMiddleware = (err, req, res, next) => {
  err.message ||= "Internal server error";
  err.statuscode ||= 500;

  return res.status(err.statuscode).json({
    success: false,
    message: err.message,
  });
};

const TryCatch = (passedFunc) => async (req, res, next) => {
  try {
    await passedFunc(req, res, next);
  } catch (error) {
    next(error);
  }
};

export { errorMiddleware, TryCatch };
