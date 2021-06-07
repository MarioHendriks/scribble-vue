import { RegisterDTO } from "@/models/dto/register.dto";
import { AxiosRequestHandler } from "@/utils/AxiosRequestHandler";
import { AxiosResponse } from "axios";
import store from "@/store/index";
import { LoginDTO } from "@/models/dto/login.dto";
import { VerifyDTO } from "@/models/dto/verify.dto";
import { ProfileDTO } from "@/models/dto/profile.dto";
import { ProfileViewmodel } from "@/models/viewmodel/profile.viewmodel";

export class ProfileService {
  public static async postProfile(
    profileDTO: ProfileDTO
  ): Promise<ProfileViewmodel> {
    const url = "http://localhost:3002/profile";

    return AxiosRequestHandler.post(url, profileDTO)
      .then((res: AxiosResponse) => {
        if (res.status >= 200 && res.status < 300) {
          return res.data;
        }
      })
      .catch((err) => {
        console.table(err);
        throw err;
      });
  }

  public static async getProfileByUsername(username: string): Promise<any> {
    const url = `http://localhost:3002/profile/username/${username}`; //TODO fix dit met token
    //TODO add response

    return AxiosRequestHandler.get(url)
      .then((res: AxiosResponse) => {
        if (res.status >= 200 && res.status < 300) {
          return res.data;
        }
      })
      .catch((err) => {
        console.table(err);
        throw err;
      });
  }
}
