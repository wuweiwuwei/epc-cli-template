<!--
 * @Description  : 
 * @Author       : AoBingChi
 * @email        : 3109952@qq.com
 * @Date         : 2024-03-12 11:42:01
 * @LastEditors  : AoBingChi
 * @LastEditTime : 2024-03-13 17:41:24
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
    <h3>yuiooooooo</h3>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
// import Api from '../../../../common/api/index'
// import * as ss from '@cbim-epc-magic/utils'
import * as pp from 'iqiii'
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
  // const re = ss.add(12, 23)
  // console.log(re)
  // const res = await 1
  // console.log(Api, 'Api')
  // const res = await Api.testApi_01pro.AjaxTestB({ name: '' })
  // console.log('res：', res)
}
onMounted(() => {
  console.log(1)
  console.log(pp.add(90, 2))
})
</script>

<style scoped lang="scss"></style>
