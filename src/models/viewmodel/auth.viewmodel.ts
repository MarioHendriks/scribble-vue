import { AccountStatus } from "../Enum/AccountStatus";
import { Roles } from "../Enum/Roles";
import { ProfileViewmodel } from "./profile.viewmodel";

export class AuthVM {
  username: string;
  role: Roles;
  token: string;
  accountStatus: AccountStatus;
  profile: ProfileViewmodel;
}
