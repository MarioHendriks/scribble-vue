<template>
  <div class="homeWrapper">
    <div class="homeCol">
      <div class="homerow">
        <HomeProfile :user="user"/>
      </div>
      <div class="homerow"><Trending /></div>
      <div class="homerow"></div>
    </div>
    <div class="homeColx2">
      <div class="search"><HomeSearchBar/> </div>
      <div class="ScribbleBox"><ScribbleBox/></div>
      <div class="feed"><ScribbleFeed/></div>
    </div>
    <div class="homeCol">
      <div class="homerow"></div>
      <div class="homerow"></div>
      <div class="homerow"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import ProfileModal from "@/components/modal/profileModal.vue";
  import HomeProfile from "@/components/home/HomeProfile.vue"
  import HomeSearchBar from "@/components/home/HomeSearchBar.vue"
  import ScribbleFeed from "@/components/home/ScribbleFeed.vue"
  import ScribbleBox from "@/components/home/ScribbleBox.vue"
  import Trending from "@/components/home/Trending.vue"

  @Component({ components: {HomeProfile, HomeSearchBar,ScribbleBox,ScribbleFeed, Trending} })
  export default class Home extends Vue {
    created() {
      this.checkProfile();
    }

    checkProfile() {
      if (!this.user.profile) {
        this.$modal.show(ProfileModal);
      }
    }

    get user() {
      return this.$store.getters.getUser;
    }
  }
</script>

<style>
.homeWrapper{
  flex-direction: row;
  display: flex;
  width: 90vw;
  height: 95vh;
  margin: auto;
}
.homeCol{
  display: flex;
    flex-direction: column;
  width: 15vw;
    height: 80vh;
  margin: auto;
}
.homeColx2{
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 80vh;
  margin: auto;
}
.search{
    display: flex;
  width: 50vw;
  height: 5vh;
  margin: auto;
}
.ScribbleBox{
    display: flex;
  width: 50vw;
  height: 11vh;
  margin: auto;
}
.feed{
      display: flex;
  width: 50vw;
  height: 58vh;
  margin: auto;
}
.homerowx2{
    display: flex;
  width: 50vw;
  height: 20vh;
  margin: auto;
}

.homerow{
    display: flex;
  width: 15vw;
  height: 20vh;
  margin: auto;
}
</style>
