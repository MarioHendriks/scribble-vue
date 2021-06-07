<template>
  <div>
    <div class="flexboxSignupForm">
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
            placeholder="Username"
            v-model="registerDTO.username"
          />
        </div>
        <div class="inputDiv">
          <font-awesome-icon :icon="['fas', 'at']" size="2x" color="#F8BD3F" />
          <input
            class="inputStyle"
            placeholder="Email"
            type="email"
            v-model="registerDTO.email"
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
            placeholder="Password"
            type="password"
            v-model="registerDTO.password"
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
            placeholder="Password"
            type="password"
            v-model="registerDTO.passwordVerify"
          />
        </div>
        <div class="flexbox">
          <button class="SignupButton" @click="signUp">Signup</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RegisterDTO } from "@/models/dto/register.dto";
import { Component, Vue } from "vue-property-decorator";
import { AuthService } from "@/services/AuthService";
import { AuthVM } from "@/models/viewmodel/auth.viewmodel";
import { AccountStatus } from "@/models/Enum/AccountStatus";
@Component({ components: {} })
export default class SignupForm extends Vue {
  private error = "";
  private registerDTO: RegisterDTO = {
    username: "",
    email: "",
    password: "",
    passwordVerify: ""
  };
  signUp() {
    AuthService.register(this.registerDTO)
      .then((res: AuthVM) => {
        console.log(res);
        if ((res.accountStatus as AccountStatus) === AccountStatus.pending)
          return this.$router.replace("Verification");

        return this.$router.replace("Home");
      })
      .catch((err: { message: any }) => {
        console.log(err)
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
.flexboxSignupForm {
  justify-content: center;
  margin-bottom: 6em;
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

.SignupButton {
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
