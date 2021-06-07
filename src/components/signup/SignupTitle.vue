<template>
  <div>
    <div class="flexboxSignupTitle">
      <img class="Signuplogo" src="../../assets/LOGO.svg" alt="ink" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class SignupTitle extends Vue {}
</script>

<style>
.Signuplogo {
  width: 1000px;
}
.flexboxSignupTitle {
  margin-bottom: 6em;
  justify-content: center;
  display: flex;
}
</style>
