<template>
  <div class="profileBody">
    <div class="banner">
      <img :src="this.user.profile.photo" class="photoDisplay" />
      <h1>{{ `@${this.user.username}` }}</h1>
    </div>
    <div>
      <p class="bio">{{ this.user.profile.bio }}</p>
    </div>
    <div class="details">
      <div class="detailscol">
        <div class="firstpart">{{ `${$t("homeprofile.age")}:` }}</div>
        <div>{{this.user.profile.age}}</div>
      </div>
      <div class="detailscol">
        <div class="firstpart">{{ `${$t("homeprofile.likes")}:` }}</div>
        <div>placeholder</div>
      </div>
      <div class="detailscol">
        <div class="firstpart">{{ `${$t("homeprofile.followers")}:` }} </div>
        <div>placeholder</div>
      </div>
      <div class="detailscol">
        <div class="firstpart">{{ `${$t("homeprofile.following")}:` }}</div>
        <div>placehholder</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { AuthVM } from "@/models/viewmodel/auth.viewmodel";
  import { Component, Prop, Vue } from "vue-property-decorator";
  @Component({ components: {} })
  export default class HomeProfile extends Vue {
    @Prop()
    readonly user: AuthVM;
  }
</script>

<style scoped>
.firstpart{
    color: #F6CE78
}
.detailscol{
    display: flex;
    flex-direction: row;
    font-size: 1em;
}
.profileBody{
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    background: #F2F5FF;
    width: 100%;
    height: 100%;
}
  .banner {
    display: flex;
    margin: 10px;
    flex-direction: row;
    color: #F6CE78;
    font-size: 2em;
  }
  .bio {
          margin: 10px;
    font-size: 1em;
    color: black;
  }
  .photoDisplay {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
</style>
