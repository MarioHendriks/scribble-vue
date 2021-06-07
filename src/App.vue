<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import Nav from "@/components/nav/Nav.vue";
import { Component, Vue } from "vue-property-decorator"; //TODO test alles calls

@Component({ components: { Nav } })
export default class App extends Vue {}
</script>
<style lang="scss">
@font-face {
  font-family: "Scribble";
  src: url("./assets/Pacifico-Regular.ttf");
}
body {
  margin: 0;
  overflow: hidden;
}
button {
  outline: none;
}

#app {
  font-family: Scribble, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
