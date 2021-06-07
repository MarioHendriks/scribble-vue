import { StatusCodes } from "http-status-codes";
import { HttpException } from "./httpException";

export class BadRequestException extends HttpException {
  constructor(message = "Bad request...") {
    super(StatusCodes.BAD_REQUEST, message);
  }
}
