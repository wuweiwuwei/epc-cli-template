<template>
  <MContentHeader title="用户">
    <template #action>
      <el-button type="primary" > 确定</el-button>
    </template>
  </MContentHeader>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as MagicUtils from '@cbim-epc-magic/utils'

const tempData = ref([])

const handleTestA = () => {
  alert('BTN-EL-PLUS1')
}

/**
 * @description  : 请求的测试方法 该方法请求的是头条的新闻列表数据（请不要过于频繁请求）
 * @return        {*}
 */
const handleTest = () => {
  MagicUtils.API.get('/api/index', {
    key: '91d3fc46980fb7a4c59adc3685fbe45b',
    type: 'top'
  })
    .then((res) => {
      tempData.value = res.result.data
      console.log('🚀 = ABC.LOG = 🚀 ~ res: ', res)
    })
    .catch((err) => {
      console.log('🚀 = ABC.LOG = 🚀 ~ err: ', err)
    })
}
onMounted(() => {
  // const os = MagicUtils.getOS()
  console.log('🚀 = ABC.LOG = 🚀 ~ MagicUtils: ', MagicUtils)
  // console.log('🚀 = ABC.LOG = 🚀 ~ os: ', os)
})
</script>

<style lang="scss" scoped></style>
