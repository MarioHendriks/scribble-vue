<template>
  <div class="flexBoxSignupPage">
    <SignupTitle />
    <SignupForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SignupTitle from "@/components/signup/SignupTitle.vue";
import SignupForm from "@/components/signup/SignupForm.vue";

@Component({ components: { SignupTitle, SignupForm } })
export default class Signup extends Vue {}
</script>

<style>
.flexBoxSignupPage {
  margin: 12em;
  display: flex;
  flex-direction: column;
}
</style>
