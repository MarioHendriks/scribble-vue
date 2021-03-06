import axios, { AxiosResponse, AxiosError } from "axios";
import { StatusCodes } from "http-status-codes";
import { BadRequestException } from "./exceptions/badRequest.exception";
import { HttpException } from "./exceptions/httpException";
import { InternalServerException } from "./exceptions/internalServer.exception";
import { UnauthorizedException } from "./exceptions/unauthorized.exception";

export class AxiosRequestHandler {
  private static api = axios.create();
  // {
  // baseURL: process.env.VUE_APP_GATEWAY_BASE_URL
  // }
  public static get(url: string): any {
    return this.api
      .get(url)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: AxiosError) => {
        if (err.response) {
          return err.response;
        }
      });
  }

  public static post(url: string, object: any): any {
    return this.api
      .post(url, object)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: AxiosError) => {
        throw this.checkStatusCode(err);
      });
  }

  public static patch(url: string, object: any): any {
    return this.api
      .patch(url, object)
      .then((res: AxiosResponse) => {
        return res;
      })
      .catch((err: AxiosError) => {
        throw this.checkStatusCode(err);
      });
  }

  private static checkStatusCode(err: AxiosError<any>): HttpException {
    const message: string = err.response.data.message;
    console.table(err);
    switch (err.response.status) {
      case StatusCodes.UNAUTHORIZED:
        return new UnauthorizedException(message);
      case StatusCodes.BAD_REQUEST:
        return new BadRequestException(message);
      case StatusCodes.INTERNAL_SERVER_ERROR:
        return new InternalServerException(message);
    }
  }
}
