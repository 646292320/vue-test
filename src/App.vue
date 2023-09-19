<template>
  <div id="app">
    <!-- <router-link to="/" class="backIndex"> 《首页 </router-link> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.backIndex {
  position: absolute;
  left: 20px;
  z-index: 99;
  top: 0px;
  color: #fff;
  text-decoration: none;
}
</style>