<template>
  <div>
    <div class="flexboxLoginForm">
      <div class="form">
        <p>{{ error }}</p>
        <div class="inputDiv">
          <font-awesome-icon
            :icon="['fas', 'user-circle']"
            size="2x"
            color="#F8BD3F"
          />
          <input
            class="inputStyle"
            v-bind:placeholder="$t('Login.username')"
            v-model="loginDTO.username"
          />
        </div>
        <div class="inputDiv">
          <font-awesome-icon
            :icon="['fas', 'lock']"
            size="2x"
            color="#F8BD3F"
          />
          <input
            class="inputStyle"
            v-bind:placeholder="$t('Login.password')"
            type="password"
            v-model="loginDTO.password"
          />
        </div>
        <div class="flexbox">
          <button class="LoginButton" @click="signUp">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { LoginDTO } from "@/models/dto/login.dto";
import { Component, Vue } from "vue-property-decorator";
import { AuthService } from "@/services/AuthService";
import { AuthVM } from "@/models/viewmodel/auth.viewmodel";
import { AccountStatus } from "@/models/Enum/AccountStatus";
@Component({ components: {} })
export default class LoginForm extends Vue {
  private error = "";
  private loginDTO: LoginDTO = {
    username: "",
    password: ""
  };
  signUp() {
    AuthService.login(this.loginDTO)
      .then((res: AuthVM) => {
        console.log(res);
        if ((res.accountStatus as AccountStatus) === AccountStatus.pending)
          return this.$router.replace("Verification");

        return this.$router.replace("Home");
      })
      .catch((err: { message: any }) => {
        if (!Array.isArray(err.message)) return (this.error = err.message);

        return (this.error = err.message[0]);
      });
  }
}
</script>

<style>
.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.flexboxLoginForm {
  justify-content: center;
  margin-bottom: 1em;
  display: flex;
}
.inputStyle {
  height: 2em;
  outline: none;
  border: none;
  width: 20em;
  font-family: Scribble;
  text-align: center;
  font-size: 25px;
}
.inputDiv {
  margin: 0 0 1em 0;
  border-bottom: 0.5em solid black;
}

.LoginButton {
  text-align: center;
  background-color: #f8bd3f;
  font-size: 25px;
  border-radius: 1em;
  width: 8em;
  height: 2em;
  font-family: Scribble;
  margin: 3em 0 0 0;
}
</style>
