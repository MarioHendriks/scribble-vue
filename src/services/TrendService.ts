import { AxiosRequestHandler } from "@/utils/AxiosRequestHandler";
import { AxiosResponse } from "axios";

export class TrendService {
    public static async  getTrending(): Promise<any> {
    const url = "http://localhost:3006/trending";

    return AxiosRequestHandler.get(url)
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