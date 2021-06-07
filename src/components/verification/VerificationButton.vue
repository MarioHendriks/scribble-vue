<template>
  <div class="flexbox">
    <button class="VerificationButton" @click="resend">Resend.</button>
  </div>
</template>

<script lang="ts">
import { AuthService } from "@/services/AuthService";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class VerificationButton extends Vue {
  resend() {
    throw "a"; //TODO resend mail.
  }
}
</script>

<style>
.verificationError {
  text-align: center;
  margin-bottom: 1em;
}
.VerificationButton {
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
