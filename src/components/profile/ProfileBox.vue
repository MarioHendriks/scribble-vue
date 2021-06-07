<template>
  <div class="scribbleBox">
    {{ error }}
    <div class="w-full flex m-auto">
      <div class="w-1/3 h-full flex text-center text-lg handleColor ">  <img :src="this.profile.profile.photo" class="photoDisplay" /> {{`@${this.profile.username}`}} </div>
      <div class="w-1/3 h-full flex text-center">{{this.profile.profile.bio}}</div>
      <div class="w-1/3 h-full flex text-center"><button class="bg-grey-light hover:bg-yellow-400 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
  <img class="w-4 h-4 mr-2" src="../../../src/assets/follow.svg" />
  <span>Follow</span>
</button></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import {ProfileService} from "@/services/ProfileService"
  @Component({ components: {} })
  export default class ProfileBox extends Vue {
    private error: any = "";
    private profile: any = {}
    created(){
        ProfileService.getProfileByUsername(this.$route.params['name']).then(res =>{
            this.profile = res
        })
    }
  }
</script>

<style scoped>
  .handleColor {
    color: #f6ce78;
  }
    .photoDisplay {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .scribbleTextBox {
    resize: none;
    border: none;
    font-family: Scribble;
  }
  .scribbleBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background: #f2f5ff;
    margin: auto;
  }
</style>
