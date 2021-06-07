<template>
  <div>
    <div class="flexboxLoginTitle">
      <img class="Loginlogo" src="../../assets/LOGO.svg" alt="ink" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class LoginTitle extends Vue {}
</script>

<style>
.Loginlogo {
  width: 1000px;
}
.flexboxLoginTitle {
  margin-bottom: 6em;
  justify-content: center;
  display: flex;
}
</style>
