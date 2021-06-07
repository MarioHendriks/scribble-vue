<template>
  <div>
    <div class="flex">
      <img
        class="navLogo"
        @click="redirectToHome()"
        src="../../assets/LOGO.svg"
        alt="ink"
      />
      <div class="Language" >
        <img v-bind:class="{activeLanguage: this.$i18n.locale === 'en'} "  @click="setLanguage('en')" src="../../assets/englishflag.svg" alt="ink" />
      </div>
      <div class="boarderLanguage" >
        <img v-bind:class="{activeLanguage: this.$i18n.locale === 'nl'} "  @click="setLanguage('nl')" src="../../assets/dutchflag.svg" alt="ink" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ components: {} })
export default class Nav extends Vue {
  redirectToHome() {
    this.$router.replace("/");
  }

  setLanguage(language: string){
    console.log(this.$i18n.locale)
    this.$i18n.locale = language
  }
}
</script>

<style scoped>
.activeLanguage{
 filter: drop-shadow(0px 4px 2px #f8bd3f);

}
.boarderLanguage {
  text-align: right;
  margin-top: auto;
  align-self: flex-end;
  padding: 0 1em 0 0;
}
.Language {
  text-align: right;
  margin-left: auto;
  margin-top: auto;
  padding: 0 1.5em 0 0;
  align-self: flex-end;
}
.navLogo {
  margin-top: auto;
  transform: scale(0.6);
  cursor: pointer;
}
.flex {
  display: flex;
  flex-direction: row;
  height: 70px;
}
</style>
