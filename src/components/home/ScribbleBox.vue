<template>
  <div class="scribbleBox">
    {{error}}
    <div >
      <p class="catchphrase">{{ $t("homeScribbleBox.catchphrase") }}</p>
      <textarea v-model="scribbleDTO.scribbleText" class="scribbleTextBox" rows="2" cols="100" maxlength="140"></textarea>
    </div>
    <div class="button" @click="postScribble()">
      <div class="Featherbutton">      <font-awesome-icon
        class="center"
        :icon="['fas', 'feather']"
        size="1x"
        color="black"
      /></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import {ScribbleDTO} from "@/models/dto/scribble.dto"
  import {ScribbleService} from "@/services/ScribbleService"
  import extract from "mention-hashtag"
  @Component({ components: {} })
  export default class ScribbleBox extends Vue {
    private error: any = ""
    private scribbleDTO: ScribbleDTO = {
      scribbleText: "",
      token: this.$store.getters.getUser.token,
      hashtags: []
    };
    
    postScribble(){
      this.scribbleDTO.hashtags = extract(this.scribbleDTO.scribbleText, '#')
      console.log(this.scribbleDTO)
      ScribbleService.postProfile(this.scribbleDTO).then(res => {
        console.log(res)
      }).catch(err => {
        this.error = err
      })
      this.scribbleDTO.scribbleText = ""
      console.log(this.scribbleDTO)
    }
  }
</script>

<style scoped>
.button{
    margin: auto;
    margin-top:2.5em ;
}
.Featherbutton{
  width: 3em;
  height: 3em;
  margin: auto;
  border-radius: 25%;
  background: white ;
  cursor: pointer;
}
.catchphrase{
  font-size: .7em;
}
  .center {
    margin: auto;
  }
  .scribbleTextBox{
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
