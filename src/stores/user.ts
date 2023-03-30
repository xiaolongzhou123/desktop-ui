import type { IUser, IUserLdap, Nav } from "@/typeing"

import { defineStore } from "pinia"


export const useUser = defineStore('user', {
  state: () => ({
    count: 0,
    name: 'abc',
    user: {} as IUser,
    userldap: {} as IUserLdap
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    UpdateUser(user: IUser) {
      this.user = user
    },
    UpdateUserLdap(user: IUserLdap) {
      this.userldap = user
    }
  },
  // persist: {
  //   enabled: true,
  //   strategies: [{
  //     // 自定义存储的 key，默认是 store.$id
  //     //key: "custom storageKey",
  //     // 可以指定任何 extends Storage 的实例，默认是 sessionStorage,localStorage
  //     storage: sessionStorage,
  //     // state 中的字段名，按组打包储存
  //     paths: ["navList"]
  //   }]
  // }
})


