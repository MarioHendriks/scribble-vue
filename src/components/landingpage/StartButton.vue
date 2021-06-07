<template>
  <div>
    <div class="flexbox">
      <button class="StartButton" @click="RedirectSignup">{{$t('LandingPage.startNow')}}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class StartButton extends Vue {
  RedirectSignup() {
    this.$router.replace("Signup");
  }
}
</script>

<style>
.StartButton {
  text-align: center;
  background-color: #f8bd3f;
  font-size: 50px;
  border-radius: 1em;
  width: 8em;
  height: 1.7em;
  font-family: Scribble;
}
.logo {
  width: 1000px;
}
.flexbox {
  justify-content: center;
  display: flex;
}
</style>
