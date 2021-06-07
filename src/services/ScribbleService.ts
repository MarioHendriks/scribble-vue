import { RegisterDTO } from "@/models/dto/register.dto";
import { AxiosRequestHandler } from "@/utils/AxiosRequestHandler";
import { AxiosResponse } from "axios";
import store from "@/store/index";
import { LoginDTO } from "@/models/dto/login.dto";
import { VerifyDTO } from "@/models/dto/verify.dto";
import { ProfileDTO } from "@/models/dto/profile.dto";
import { ProfileViewmodel } from "@/models/viewmodel/profile.viewmodel";
import { ScribbleDTO } from "@/models/dto/scribble.dto";

export class ScribbleService {
    public static async  postProfile(scribbleDTO: ScribbleDTO): Promise<ProfileViewmodel> {
    const url = "http://localhost:3003/";

    return AxiosRequestHandler.post(url, scribbleDTO)
      .then((res: AxiosResponse) => {
        if (res.status >= 200 && res.status < 300) {
          return res.data;
        }
      })
      .catch(err => {
        console.table(err);
        throw err;
      });
  }

  public static async  getAllScribblesByID(pagenum: number): Promise<any> {
    const url = `http://localhost:3003/${pagenum}`; //TODO fix dit met token
    //TODO add response

    return AxiosRequestHandler.get(url)
      .then((res: AxiosResponse) => {
        if (res.status >= 200 && res.status < 300) {
          return res.data;
        }
      })
      .catch(err => {
        console.table(err);
        throw err;
      });
  }

  public static async  getAllScribblesByTrend(trend: string): Promise<any> {
    const url = `http://localhost:3003/trend/${trend}`; //TODO fix dit met token
    //TODO add response

    return AxiosRequestHandler.get(url)
      .then((res: AxiosResponse) => {
        if (res.status >= 200 && res.status < 300) {
          return res.data;
        }
      })
      .catch(err => {
        console.table(err);
        throw err;
      });
  }
}
