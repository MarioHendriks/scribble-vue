<template>
  <div class="flexBoxLandingsPage">
    <LandingspageTitle />
    <FadedScribbles />
    <StartButton />
    <ExistingUser />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LandingspageTitle from "@/components/landingpage/LandingpageTitle.vue";
import FadedScribbles from "@/components/landingpage/FadedScribbles.vue";
import StartButton from "@/components/landingpage/StartButton.vue";
import ExistingUser from "@/components/landingpage/ExistingUser.vue";

@Component({
  components: { LandingspageTitle, FadedScribbles, StartButton, ExistingUser }
})
export default class Landingspage extends Vue {}
</script>

<style>
.flexBoxLandingsPage {
  margin: 15em;
  display: flex;
  flex-direction: column;
}
</style>
