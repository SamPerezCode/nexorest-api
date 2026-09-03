import type { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (
  error,
  _request,
  response,
  _next,
) => {
  console.error(error);

  response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

export { errorHandler };
