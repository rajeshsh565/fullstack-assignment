const errorHandlerMiddleware = (err,req,res,next) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  const message = err.msg || 'Something went wrong, please try again!';
  res.status(statusCode).json({msg:message});
}
export default errorHandlerMiddleware