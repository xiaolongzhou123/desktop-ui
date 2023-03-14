import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  persist:{
    enable:true
  }
  getters:{}

  actions:{}

  return { count, doubleCount, increment }
})
