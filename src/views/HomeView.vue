<template>
  <div class="container">

    <!-- 这里是header -->
    <myHeader></myHeader>

    <div class="main_box">
      <!-- 这里是main，分成左和右  -->
      <navMenuVue></navMenuVue>
      <div class="right-box">
        <router-view></router-view>
      </div>

    </div>


    <!-- 这里是footer  -->
    <!-- <div class="footer-box">
      <myFooter></myFooter>
    </div> -->

  </div>
</template>

<style></style>


<script setup lang="ts">

import navMenuVue from '@/components/navMenu.vue';
import myHeader from '@/components/myHeader.vue';
import myFooter from '@/components/myFooter.vue';
import type { IUser, IUserLdap } from '@/typeing';
import { getUserLdap } from '@/utils/http';
import { useUser } from '@/stores';
import { onMounted } from 'vue';

const userstore = useUser()
onMounted(() => {

  getUserLdap().then((res: IUserLdap) => {
    //console.log(res)
    userstore.UpdateUserLdap(res)
  })
})

</script>

<style lang="less">
.container {
  display: flex;
  flex-direction: column;

  .main_box {
    display: flex;
    //120px是header,footer是150px
    height: calc(100vh - 120px);
    width: 100vw;


    .right-box {
      background-color: #eee;
      width: 100%;
    }


  }

  .footer-box {
    height: 120px;
  }
}
</style>