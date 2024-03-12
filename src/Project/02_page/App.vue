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
