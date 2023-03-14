import type { Menu } from "@/typeing/menu"


import { defineStore } from "pinia"


export const useMenu = defineStore('menu', {
  state: () => ({
    count: 0,
    name: 'abc',
    List: [] as Menu[]
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    UpdateMenu(nav: Menu[]) {
      this.List = nav
    }
  }
})


