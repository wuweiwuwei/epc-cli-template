<!--
 * @Description  : 
 * @Author       : AoBingChi
 * @email        : 3109952@qq.com
 * @Date         : 2024-02-28 14:46:17
 * @LastEditors  : AoBingChi
 * @LastEditTime : 2024-03-06 16:10:53
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
    <el-button type="success" @click="handleTestApi"> 接口请求测试</el-button>
    <el-button type="success" @click="handleTestApiB"> 接口请求B测试</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as MagicUtils from '@cbim-epc-magic/utils'
import { ElMessage } from 'element-plus'
import Api from '@/common/api'

const tempData = ref([])

/**
 * @description  : 请求的测试方法 该方法请求的是头条的新闻列表数据（请不要过于频繁请求）
 * @return        {*}
 */
const handleTestApi = async () => {
  let data = await Api.testApi_01pro.AjaxTest()
  console.log('data', data)
  if (data.error_code === 0) {
    console.log('🚀 = ABC.LOG = 🚀 ~ succes: ', '请求成功')
  } else {
    console.log('🚀 = ABC.LOG = 🚀 ~ err: ', '请求错误')
  }
  tempData.value = data.result.data
  ElMessage.success('ok')
  MagicUtils.API.get('/api/index', {
    key: '91d3fc46980fb7a4c59adc3685fbe45b',
    type: 'top'
  })
    .then((res) => {
      tempData.value = res.result.data
      ElMessage.success(res.reason)
      console.log('🚀 = ABC.LOG = 🚀 ~ res: ', res)
    })
    .catch((err) => {
      console.log('🚀 = ABC.LOG = 🚀 ~ err: ', err)
    })
}

/**
 * @description  :
 * @return        {*}
 */
const handleTestApiB = async () => {
  let data = await Api.testApi_01pro.AjaxTestB({ name: '' })
  console.log('data：', data)
}

onMounted(() => {
  // const os = MagicUtils.getOS()
  // console.log('🚀 = ABC.LOG = 🚀 ~ MagicUtils: ', MagicUtils)
  // console.log('🚀 = ABC.LOG = 🚀 ~ os: ', os)
})
</script>

<style lang="scss" scoped>
.warp-page {
  padding: 12px;
}
</style>
