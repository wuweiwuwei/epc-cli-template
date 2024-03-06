<!--
 * @Description  : 
 * @Author       : AoBingChi
 * @email        : 3109952@qq.com
 * @Date         : 2024-02-28 14:46:17
 * @LastEditors  : AoBingChi
 * @LastEditTime : 2024-03-01 16:42:24
 * @Version      : 1.0.0
-->
<template>
  <MBox title="设置">
    <template #back>
      <el-icon>
        <ArrowLeftBold />
      </el-icon>
      <span class="back-name"> 返回</span>
    </template>
    <template #menu>
      <MMenu></MMenu>
    </template>
    <template #content>
      <router-view></router-view>
    </template>
  </MBox>
</template>
<script setup>
import { ArrowLeftBold } from '@element-plus/icons-vue'
</script>
<style lang="scss">
#app {
  font-family: PingFangSC-Regular;
  height: 100%;
  width: 100%;
}
</style>
