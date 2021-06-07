<template>
  <div>
    <div class="flexboxLogin">
      <p class="catchphrase">{{$t('LandingPage.catchphrase')}}</p>
      <p class="loginText" @click="redirectLogin">{{$t('LandingPage.LoginNow')}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ components: {} })
export default class ExistingUser extends Vue {
  redirectLogin() {
    this.$router.replace("Login");
  }
}
</script>

<style scoped>
.catchphrase {
  font-size: 20px;
}
.loginText {
  font-size: 25px;
  color: #f8bd3f;
  cursor: pointer;
}
.flexboxLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}
</style>
