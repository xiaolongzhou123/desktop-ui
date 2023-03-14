import type { Nav } from "@/typeing/nav"
import { ref, computed } from 'vue'

import { defineStore } from "pinia"


export const useNav = defineStore('nav', {
    state: () => ({ 
        count: 0,
        name: 'abc',
        navList:[] as Nav[]
    }),
    getters: {
      double: (state) => state.count * 2,
    },
    actions: {
      UpdateNav(nav:Nav[]) {
        this.navList=nav
      }
    }
})
 
//  export  const useNav = defineStore('counter', () => {
//     const count = ref(0)
//     const name =ref('abc')
//     let  navList=[] as Nav[]
    
//     persist:{
//       enable:true
//     }
//     getters:{}
  
//     actions:{
//         function increment() {
//             count.value++
//           }
//           function UpdateNav(nav:Nav[]) {
//             navList=nav
//           }
//     }
//     return {name,navList}
  
//   })
  