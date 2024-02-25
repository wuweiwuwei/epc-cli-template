<template>
   <MBox title="设置">
     <template #back>
       <el-icon><ArrowLeftBold /></el-icon>
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
</script>
<style lang="scss">
#app {
  font-family: PingFangSC-Regular;
  height: 100%;
  width: 100%;
}
</style>
