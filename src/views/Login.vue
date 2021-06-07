<template>
  <div class="flexBoxLoginPage">
    <LoginTitle />
    <LoginForm />
    <LostPassword />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import LoginTitle from "@/components/login/LoginTitle.vue";
import LoginForm from "@/components/login/LoginForm.vue";
import LostPassword from "@/components/login/LostPassword.vue";
@Component({ components: { LoginTitle, LoginForm, LostPassword } })
export default class Login extends Vue {}
</script>

<style>
.flexBoxLoginPage {
  margin: 12em;
  display: flex;
  flex-direction: column;
}
</style>
