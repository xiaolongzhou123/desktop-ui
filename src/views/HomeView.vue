<script setup lang="ts">
import { GetNav } from '@/utils/request/user'
import type { Nav } from '@/typeing/nav'

import { useNav } from '@/stores/nav'
const navstore = useNav() // uses the testing pinia!


//git clone https://github.com/xiaolongzhou123/vue3-api
//{"code":200,"message":"ok","data":[{"id":1,"name":"aa"},{"id":2,"name":"bb"}]}
//后端的数组结构，必须按，code,message,data来做处理
//后端必须直接返回数据结构
GetNav().then((list: Nav[]) => {
  navstore.UpdateNav(list)
});


</script>

<template>
  <div>
    <h1>home</h1>
    {{ navstore.$state.name }}
    <template v-for="(item, index) in navstore.navList" :key="index">
      <h1>{{ item.name }}</h1>
    </template>

  </div>
</template>
