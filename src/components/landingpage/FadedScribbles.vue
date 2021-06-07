<template>
  <div>
    <div class="flexboxScribbles">
      <img class="scribbles" src="../../assets/scribbles.svg" alt="ink" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class FadedScribbles extends Vue {}
</script>

<style scoped>
.scribbles {
  width: 475px;
}
.flexboxScribbles {
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
}
</style>
