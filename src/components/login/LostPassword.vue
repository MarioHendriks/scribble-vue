<template>
  <div>
    <div class="flexboxReset">
      <p class="catchphrase">{{$t('Login.forgotCred')}}</p>
      <p class="loginReset" @click="redirectLostPassword">{{$t('Login.resetHere')}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class LostPassword extends Vue {
  redirectLostPassword() {
    this.$router.replace("ResetCredentials");
  }
}
</script>

<style scoped>
.catchphrase {
  font-size: 20px;
}
.loginReset {
  font-size: 25px;
  color: #f8bd3f;
  cursor: pointer;
}
.flexboxReset {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}
</style>
