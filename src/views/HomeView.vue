<script setup lang="ts">
import { GetNav } from '@/utils/user'
import type { Mydata,IData } from '@/utils/user'

import type { AxiosResponse } from 'axios'
import { reactive } from 'vue';




//{"code":200,"message":"ok","data":[{"id":1,"name":"aa"},{"id":2,"name":"bb"}]}
//后端的数组结构，必须按，code,message,data来做处理
//后端必须直接返回数据结构
GetNav().then((list:Mydata[]) => {
 list.forEach((e:Mydata)=>{
  console.log(e.id)
 })
});


</script>

<template>
  <div>
    <h1>home</h1>
  </div>
</template>
