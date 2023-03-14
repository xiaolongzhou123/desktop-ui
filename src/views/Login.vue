<script setup lang="ts">

// import { GetMenu } from '@/utils/request/menu'
// import { GetNav } from '@/utils/request/user'
import { GetNav, GetMenu } from '@/utils/request'
import type { Menu, Nav } from '@/typeing'

import { useNav, useMenu } from '@/stores'

const navstore = useNav() // uses the testing pinia!
const menustore = useMenu() // uses the testing pinia!

//git clone https://github.com/xiaolongzhou123/vue3-api
//{"code":200,"message":"ok","data":[{"id":1,"name":"aa"},{"id":2,"name":"bb"}]}
//后端的数组结构，必须按，code,message,data来做处理
//后端必须直接返回数据结构
GetNav().then((list: Nav[]) => {
  navstore.UpdateNav(list)
});
GetMenu().then((list: Menu[]) => {

  const parents = list.filter(routeInfo => routeInfo.pid === 0),
    children = list.filter(routeInfo => routeInfo.pid !== 0)


  dataToTree(parents, children)


  menustore.UpdateMenu(parents)


});

function dataToTree(parents: Menu[], children: Menu[]) {
  parents.map(parent => {
    children.map((child, index) => {
      if (child.pid === parent.id) {
        let _children: Menu[] = JSON.parse(JSON.stringify(children))
        _children.splice(index, 1);
        dataToTree([child], _children)
        if (parent.children) {
          parent.children.push(child);
        } else {
          parent.children = [child]
        }
      }
    })
  })
}


</script>

<template>
  <div>
    <h1>home</h1>
    {{ navstore.$state.name }}
    <template v-for="(item, index) in navstore.navList" :key="index">
      <h1>{{ item.name }}</h1>
    </template>

    menu.auth:{{ menustore.Auth }}
    <template v-for="(item, index) in menustore.menuList" :key="index">
      <h1>{{ item }}</h1>
    </template>

  </div>
</template>
