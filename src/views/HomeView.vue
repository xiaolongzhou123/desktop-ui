<script setup lang="ts">
import { GetNav } from '@/utils/user'
import type { Mydata,IData } from '@/utils/user'

import type { AxiosResponse } from 'axios'
import { reactive } from 'vue';





GetNav().then((list:IData) => {
  list.mydata.forEach(function (e:Mydata) {
    console.log(e.id);
});
});


</script>

<template>
  <div>
    <h1>home</h1>
  </div>
</template>
