<template>
  <div class="flex flex-col w-full scribbleBG h-64 rounded-lg">
    <div class="flex flex-row w-11/12 m-auto">
      <div class="flex">
        <div class="  justify-items-center">
          <img
            :src="scribble.profile.photo"
            class="flex w-24 w-24 rounded-full"
          />
        </div>
      </div>
      <div class="flex text-left">
        <div class="w-full text-lg handleColor">
          @{{ scribble.auth.username }}
        </div>
      </div>
      <div class="flex w-full text-right">
        <div class="w-full">
          <timeago :datetime="this.addhours()"></timeago>
        </div>
      </div>
    </div>
    <div class="flex flex-row w-11/12 m-auto">
      <div class="flex w-full">
        <div
          class="w-full h-16  justify-items-center scribbleText"
          v-html="this.generateText()"
        ></div>
      </div>
    </div>
    <div class="flex flex-row w-11/12 m-auto">
      <div class="flex w-1/4">
        <div class="w-2/4 text-right mr-3 justify-items-center">
          <font-awesome-icon
            :icon="['fas', 'heart']"
            size="1x"
            color="black"
            @click="like()"
          />
        </div>
        <div class="w-2/4 text-left">{{ scribble.likes.length }}</div>
      </div>
      <div class="flex w-1/4">
        <div class="w-full text-left">Rescribbles:</div>
      </div>
      <div class="flex w-1/2">
        <div class="w-full  text-right" v-if="1 === 1">delete</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { LikeService } from "@/services/LikeService";
  import * as linkify from "linkifyjs";
  import "linkifyjs/plugins/hashtag"; // optional
  import "linkifyjs/plugins/mention"; // optional
  import linkifyHtml from "linkifyjs/html";
  import { LikeDTO } from "@/models/dto/like.dto";
  @Component({ components: {} })
  export default class Scribble extends Vue {
    @Prop({
      required: true,
    })
    private scribble;
    private likeDTO: LikeDTO = {
      token: this.$store.getters.getUser.token,
      scribbleID: 0,
    };

    like() {
      this.likeDTO.scribbleID = this.scribble.id;
      LikeService.likeScribble(this.likeDTO)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
    }

    addhours() {
      return new Date(this.scribble.createdDate).getTime() + 2 * 60 * 60 * 1000;
    }

    generateText() {
      return linkifyHtml(this.scribble.scribbleText, {
        formatHref: function(href, type) {
          if (type === "mention") {
            href = "profile/" + href.substring(1);
          }
          return href;
        },
      });
    }
  }
</script>

<style scoped>
  .scribbleBG {
    background: #f2f5ff;
  }
  .handleColor {
    color: #f6ce78;
  }
  .scribbleText >>> a {
    color: #f1bb46;
  }
</style>
