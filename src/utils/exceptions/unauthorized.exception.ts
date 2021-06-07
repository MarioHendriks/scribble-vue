import { StatusCodes } from "http-status-codes";
import { HttpException } from "./httpException";

export class UnauthorizedException extends HttpException {
  constructor(message = "Unauthorized request...") {
    super(StatusCodes.UNAUTHORIZED, message);
  }
}
