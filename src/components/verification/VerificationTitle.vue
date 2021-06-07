<template>
  <div>
    <div class="flexboxVerificationTitle">
      <img class="Verificationlogo" src="../../assets/LOGO.svg" alt="ink" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class VerificationTitle extends Vue {}
</script>

<style>
.Verificationlogo {
  width: 1000px;
}
.VerificationTitle {
  margin-bottom: 6em;
  justify-content: center;
  display: flex;
}
</style>
