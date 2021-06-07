import { StatusCodes } from "http-status-codes";
import { HttpException } from "./httpException";

export class InternalServerException extends HttpException {
  constructor(message = "Internal Server error...") {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}
