<!--
 * @Description  : 
 * @Author       : AoBingChi
 * @email        : 3109952@qq.com
 * @Date         : 2024-03-12 11:42:01
 * @LastEditors  : AoBingChi
 * @LastEditTime : 2024-03-12 13:41:57
 * @Version      : 1.0.0
-->
<template>
  <MContentHeader title="用户">
    <template #action>
      <el-button type="success"> 测试</el-button>
      <el-button type="primary"> 确定</el-button>
    </template>
  </MContentHeader>
  <div class="warp-page">
    <el-button type="success" @click="handleTestApi">测试</el-button>
    <el-button type="success" @click="handleTestApiB"> 接口请求测试</el-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Api from '@/common/api'
/**
 * @description  : 测试方法
 * @return        {*}
 */
const handleTestApi = () => {
  console.log('接口请求测试')
}
/**
 * @description  : 测试方法B
 * @return        {*}
 */
const handleTestApiB = async () => {
  console.log('接口请求B测试')
  const res = await Api.testApi_01pro.AjaxTestB({ name: '' })
  console.log('res：', res)
}
onMounted(() => {})
</script>

<style scoped lang="scss"></style>
