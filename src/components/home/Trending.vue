<template>
  <div class="flex flex-col w-full h-full trendbody">
    <h1 class="text-lg text-left ml-5 headerTrend">#Trending</h1>
    <div class="flex flex-row" v-for="trend in this.trending" :key="trend.id">
      <h3 class="ml-5 text-left w-2/4">{{ trend.trend }}</h3>
      <div class="text-right">{{ trend.uses }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { TrendService } from "@/services/TrendService";

  @Component({ components: {} })
  export default class Trending extends Vue {
    private trending = [];
    async created() {
      await TrendService.getTrending().then((res) => {
        this.trending = res;
      });
    }
  }
</script>

<style scoped>
  .trendbody {
    background: #f2f5ff;
  }

  .headerTrend {
    color: #f6ce78;
  }
</style>
