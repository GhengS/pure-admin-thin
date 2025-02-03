<script setup lang="ts">
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Fighting"
});

import { MyDateResult, getMyDate } from "@/api/mytime";

async function onLogin() {
  let result: MyDateResult = await getMyDate();
  if (result.code === 200) {
    console.log(result.data);
  }
}
</script>

<template>
  <div>
    <h1>加油</h1>
    <el-button @click="onLogin">加油</el-button>
  </div>
</template>
