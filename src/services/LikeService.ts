import { AxiosRequestHandler } from "@/utils/AxiosRequestHandler";
import { AxiosResponse } from "axios";
import {LikeDTO} from "@/models/dto/like.dto"

export class LikeService {
    public static async  likeScribble(LikeDTO: LikeDTO): Promise<any> {
        console.log(LikeDTO)
    const url = "http://localhost:3007";

    return AxiosRequestHandler.post(url,LikeDTO)
      .then((res: AxiosResponse) => {
        if (res.status >= 200 && res.status < 300) {
            console.log(res.data)
          return res.data;
        }
      })
      .catch(err => {
        console.table(err);
        throw err;
      });
  }
}