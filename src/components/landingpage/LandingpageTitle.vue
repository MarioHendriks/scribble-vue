<template>
  <div>
    <div class="flexboxTitle">
      <img class="logo" src="../../assets/LOGO.svg" alt="ink" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class LandingspageTitle extends Vue {}
</script>

<style>
.logo {
  width: 1000px;
}
.flexboxTitle {
  margin-bottom: 6em;
  justify-content: center;
  display: flex;
}
</style>
