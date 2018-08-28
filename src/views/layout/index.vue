<template>
  <div class="App">
    <Topbar></Topbar>
    <div class="App-body wrap m-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Topbar from './topbar/index';

export default {
  components: {
    Topbar,
  },
};
</script>

<style scoped lang="less">
  .App {
    padding-top: 60px;
    .App-body {
      padding-top: 20px;
    }
  }
</style>
