<template>
    <div>
        <t-menu v-model:expanded="expanded" theme="light" default-value="3-2" expand-mutex height="550px"
            :collapsed="menustore.collapsed" @change="changeHandler">
            <t-submenu value="3">
                <template #icon>
                    <t-icon name="mail" />
                </template>
                <template #title>
                    <span>流量管理</span>
                </template>
                <t-menu-item value="/flow/all"> 总流量管理 </t-menu-item>
                <t-menu-item value="/flow/ip"> 单流量管理 </t-menu-item>

            </t-submenu>


            <t-submenu value="4">
                <template #icon>
                    <t-icon name="mail" />
                </template>
                <template #title>
                    <span>设备管理</span>
                </template>
                <t-menu-item value="4-2"> USG6030 </t-menu-item>
                <t-menu-item value="4-3"> S5735 </t-menu-item>
                <t-menu-item value="4-3"> AC </t-menu-item>
                <t-menu-item value="4-3"> POE </t-menu-item>
            </t-submenu>





            <t-submenu value="5">
                <template #icon>
                    <t-icon name="play-circle" />
                </template>
                <template #title>
                    <span>用户管理</span>
                </template>
                <t-menu-item value="/user/add"> 添加用户 </t-menu-item>
                <t-menu-item value="/user/list"> 用户列表 </t-menu-item>
                <t-menu-item value="/user/index"> 个人中心 </t-menu-item>


            </t-submenu>





            <t-menu-item value="edit1">
                <template #icon>
                    <t-icon name="edit-1" />
                </template>
                全屏放大
            </t-menu-item>
            <template #operations>
                <t-button variant="text" shape="square" @click="changeCollapsed">
                    <template #icon><t-icon name="view-list" /></template>
                </t-button>
            </template>



        </t-menu>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router'
import { useMenu } from '@/stores';

const menustore = useMenu()

//const collapsed = ref(false);
const expanded = ref(['2', '3']);

const changeHandler = (active: string) => {
    console.log('change', active);
    router.push(active)
};


const changeCollapsed = () => {
    // collapsed.value = !collapsed.value;
    menustore.UpdateCollapsed()
};


</script>