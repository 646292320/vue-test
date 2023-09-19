<template>
  <div class="home">
    <h1>这是home页面</h1>
    <!-- 使用 router-link 组件进行导航,也可以用a标签，router-link渲染后也是a标签 -->
    <nav>
      <router-link to="/day1" class="link">Day 1</router-link>
      <router-link to="/day2" class="link">Day 2</router-link>
      <router-link to="/day3" class="link">Day 3</router-link>
      <router-link to="/day4" class="link">Day 4</router-link>
      <router-link to="/day5" class="link">Day 5</router-link>
      <router-link to="/day6/123" class="link">Day 6</router-link>
      <router-link to="/day7" class="link">Day 7</router-link>
      <router-link to="/day8" class="link">Day 8</router-link>
      <router-link to="/day9" class="link">Day 9</router-link>
      <router-link to="/day10" class="link">Day 10</router-link>
      <router-link to="/day11" class="link">Day 11</router-link>
      <router-link to="/day12" class="link">Day 12</router-link>
    </nav>
    <h2>演示跳转到文章页面不用router-link</h2>
    <!-- <el-button type="primary" size="small" @click="jumpArtcle"
      >点击事件跳转文章页面</el-button
    >
    <el-button type="primary" size="small" @click="jumpList"
      >点击事件跳转列表页面</el-button
    > -->
  </div>
</template>

<script>
export default {
  name: 'home-page',
}
</script>

<style lang="scss" scoped>
.link {
  color: #333;
  margin-right: 15px;
  font-size: 20px;
}
</style>
