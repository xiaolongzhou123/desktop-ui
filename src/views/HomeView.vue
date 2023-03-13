<script setup lang="ts">
import { GetNav } from '@/utils/user'

export interface INav {
  userId: number
  id: number
  title: string
  completed: boolean
}


GetNav().then((list: any) => {
  console.log(list)
});


</script>

<template>
  <div>
    <h1>home</h1>
  </div>
</template>
