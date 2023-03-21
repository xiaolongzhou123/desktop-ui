<template>
  <div>
    <h1>index</h1>
  </div>
</template>

<style></style>


<script setup lang="ts">
import type { IResponseData, IUser } from '@/typeing';
import { getUser } from '@/utils/request';

getUser().then((res: IUser) => {
  console.log(res)
}).catch(error => {
  console.log("获取失败", error.response.data)
});
</script>