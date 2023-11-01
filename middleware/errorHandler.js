//accept request and convert it into json format
const {constants} = require("../constants");

const erroHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; //if res.statusCode is not there then it will be 500

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "validation error",
        message: err.message,
        stacktrace: error.stack,
      });

      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stacktrace: error.stack,
      });

      break;
      case constants.FORBIDDEN:
        res.json({
          title: "Forbidden",
          message: err.message,
          stacktrace: error.stack,
        });

  
        break;

        case constants.INTERNAL_SERVER_ERROR:
      res.json({
        title: "Internal Server Error",
        message: err.message,
        stacktrace: error.stack,
      });

      break;
    default:
      console.log("No Error,All good");
      break;
  }
};
module.exports = erroHandler;
