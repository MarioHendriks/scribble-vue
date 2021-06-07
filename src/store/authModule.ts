import { AuthVM } from "@/models/viewmodel/auth.viewmodel";
import { StatusCodes } from "http-status-codes";

export default {
  state: {
    user: null
  },
  mutations: {
    SAVE_USER(state: any, user: AuthVM) {
      return (state.user = user);
    }
  },
  getters: {
    getUser: (state: { user: AuthVM }) => {
      return state.user;
    }
  },
  actions: {
    saveUser({ commit }: any, user: AuthVM) {
      commit("SAVE_USER", user);
    }
  }
};
