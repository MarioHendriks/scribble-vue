<template>
  <div class="scribbleFeed">

    <div class="flex flex-col h-full w-full overflow-auto">
      <div v-for="scribble in scribbles" :key="scribble.id" class="w-full mb-5">
        <scribble :scribble="scribble" />
      </div>
      <infinite-loading spinner="spiral" @infinite="GetMoreScribbles">
        <div slot="no-more"></div>
      </infinite-loading>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from "vue-property-decorator";
  import { ScribbleService } from "@/services/ScribbleService";
  import Scribble from "@/components/feed/scribble.vue";
  import InfiniteLoading from "vue-infinite-loading";
  @Component({ components: { InfiniteLoading, Scribble } })
  export default class ScribbleFeed extends Vue {
    private scribbles = [];
    private currentPage = 0;
    private pageAmount = 1;
    private enableInfinitLoad = false;
    private timeline = false;

    async calculatePageNumber(data) {
      this.pageAmount = Math.ceil(data.count / 10);
          
    }

    @Watch('$route.hash')
      onPropertyChanged(value: string, oldValue: string) {
        value = value.substring(1, value.length)
        console.log(value)
      ScribbleService.getAllScribblesByTrend(value).then(res => {
        console.log(res)
        this.scribbles = res
      })
    }



    async GetMoreScribbles($state) {
      if(this.$route.hash){
        console.log("aaa")
      }else{
      if (this.currentPage == this.pageAmount) {
        $state.complete();
      } else {
        await ScribbleService.getAllScribblesByID(this.currentPage).then(
          (res) => {
            console.log(res)
            this.scribbles = this.scribbles.concat(res.data);
            this.calculatePageNumber(res)
            console.log(this.scribbles)
            this.currentPage++;
          }
        ); //TODO add token
        $state.loaded();
      }
    }
  }

    async contentSwap() {
      if (this.timeline == false) {
        this.timeline = true;
      } else {
        this.timeline = false;
      }
    }
  }
</script>

<style scoped>
  .center {
    margin: auto;
  }
  .scribbleFeed {
    border-radius: 2%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    margin: auto;
  }
</style>
