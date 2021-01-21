<template>
<div>
  <el-container>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</div>
</template>

<script>
import ainoriMenu from './components/layout/all_aside.vue'

export default {
  components: {
    ainoriMenu
  }
}
</script>

<style>
.invoice-management__aside {
  margin: 0 0 0 0;
  border-right: 1px solid #409EFF;
  height: 100vh;
}
</style>
