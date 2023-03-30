import type { IPromeRes, IUser, IUserLdap, Nav } from "@/typeing"

import { defineStore } from "pinia"


export const useProme = defineStore('prome', {
  state: () => ({
    count: 0,
    name: 'abc',
    arr: {} as IPromeRes,
  }),
  getters: {
    x: (state) => {

      let d: [] = []
      state.arr.data.result[0].values.filter((item, index, array) => {
        let n = Number(item[0])
        d.push(n as never)
      });
      return d
    },
    y: (state) => {
      let d: number[] = []
      state.arr.data.result[0].values.filter((item, index, array) => {
        let n = Number(item[1])
        d.push(n as number)
      });
      return d
    },
  },
  actions: {
    UpdateData(arr: IPromeRes) {
      //  console.log("i am UpdateData")
      this.arr = arr
    },

  },

})


