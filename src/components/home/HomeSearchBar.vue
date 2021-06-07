<template>
  <div class="searchBody">
    <div class="search">
      <font-awesome-icon
        class="center"
        :icon="['fas', 'search']"
        size="2x"
        color="black"
      />
      <input class="inputStyle" v-bind:placeholder="$t('homeSearch.search')" />
    </div>
    <div class="mentions">
      <div>{{ $t("homeSearch.mentions") }}</div>
    </div>
    <div class="rescribbles"><div>Rescribbles</div></div>
    <div class="myscribbles">
      <div>{{ $t("homeSearch.myscribbles") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  @Component({ components: {} })
  export default class HomeSearchBar extends Vue {}
</script>

<style scoped>
  .center {
    margin: auto;
  }
  .searchBody {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    margin: auto;
  }

  .inputStyle {
    height:1.5em;
    width: 20em;
    color: #f6ce78;
    background: #f2f5ff;
    font-family: Scribble;
    text-align: center;
    font-size: 25px;
    margin: auto;
  }

  .inputStyle::placeholder {
    height: 2em;
    outline: none;
    border: none;
    width: 20em;
    color: #f6ce78;
    background: #f2f5ff;
    font-family: Scribble;
    text-align: center;
    font-size: 25px;
  }
  .search {
    margin: auto;
    justify-content: center;
    flex-direction: row;
    background: #f2f5ff;
    display: flex;
    width: 55%;
    height: 100%;
  }
  .mentions {
    color: #f6ce78;
    justify-content: center;
    flex-direction: row;
    background: #f2f5ff;
    margin: auto;
    display: flex;
    width: 13%;
    height: 100%;
    margin: auto;
  }
  .rescribbles {
    color: #f6ce78;
    justify-content: center;
    flex-direction: row;
    background: #f2f5ff;
    margin: auto;
    margin: auto;
    display: flex;
    width: 13%;
    height: 100%;
  }
  .myscribbles {
    color: #f6ce78;
    justify-content: center;
    flex-direction: row;
    background: #f2f5ff;
    margin: auto;
    margin: auto;
    display: flex;
    width: 13%;
    height: 100%;
  }
</style>
