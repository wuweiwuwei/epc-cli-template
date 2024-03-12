<<<<<<< HEAD
<template>
  首页
  <router-view></router-view>
</template>
<script setup lang="ts"></script>
<style lang="scss">
#app {
  font-family: PingFangSC-Regular;
}
</style>
=======
<!--
 * @Description  : 
 * @Author       : AoBingChi
 * @email        : 3109952@qq.com
 * @Date         : 2024-02-28 14:46:17
 * @LastEditors  : AoBingChi
 * @LastEditTime : 2024-03-12 11:39:48
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
<script lang="ts" setup>
import { ArrowLeftBold } from '@element-plus/icons-vue'
</script>
<style scoped lang="scss"></style>
>>>>>>> 4603f4cdb269f3726905af56ad1db8773ed5b612
