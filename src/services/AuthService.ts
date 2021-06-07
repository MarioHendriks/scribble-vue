import { RegisterDTO } from "@/models/dto/register.dto";
import { AxiosRequestHandler } from "@/utils/AxiosRequestHandler";
import { AxiosResponse } from "axios";
import store from "@/store/index";
import { LoginDTO } from "@/models/dto/login.dto";
import { VerifyDTO } from "@/models/dto/verify.dto";

export class AuthService {
  public static register(registerDTO: RegisterDTO) {
    const url = "http://localhost:3000/auth/register";

    return AxiosRequestHandler.post(url, registerDTO)
      .then((res: AxiosResponse) => {
        if (res.status >= 200 && res.status < 300) {
          store.dispatch("saveUser", res.data);
          return res.data;
        }
      })
      .catch(err => {
        console.table(err);
        throw err;
      });
  }

  public static login(loginDTO: LoginDTO) {
    const url = "http://localhost:3000/auth/login";

    return AxiosRequestHandler.post(url, loginDTO)
      .then((res: AxiosResponse) => {
        if (res.status >= 200 && res.status < 300) {
          store.dispatch("saveUser", res.data);
          return res.data;
        }
      })
      .catch(err => {
        console.table(err);
        throw err;
      });
  }

  public static verifyUser(verifyDTO: VerifyDTO) {
    const url = "http://localhost:3000/auth/verify";

    return AxiosRequestHandler.patch(url, verifyDTO)
      .then((res: AxiosResponse) => {
        if (res.status >= 200 && res.status < 300) {
          store.dispatch("saveUser", res.data);
          console.log(res.data);
          return res.data;
        }
      })
      .catch(err => {
        console.table(err);
        throw err;
      });
  }
}
