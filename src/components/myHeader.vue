<template>
    <t-header>
        <t-head-menu value="item1" height="120px">
            <template #logo>
                <img width="136" class="logo" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo" />
            </template>
            <t-menu-item value="item1"> 已选内容 </t-menu-item>
            <t-menu-item value="item2"> 菜单内容一 </t-menu-item>
            <t-menu-item value="item3"> 菜单内容二 </t-menu-item>
            <t-menu-item value="item4" :disabled="true"> 菜单内容三 </t-menu-item>
            <template #operations>
                <t-dropdown :min-column-width="120" trigger="click">
                    <template #dropdown>
                        <t-dropdown-menu>
                            <t-dropdown-item class="operations-dropdown-container-item" @click="handleNav('/user/index')">
                                <t-icon name="user-circle"></t-icon>个人中心
                            </t-dropdown-item>
                            <t-dropdown-item class="operations-dropdown-container-item" @click="handleLogout">
                                <t-icon name="poweroff"></t-icon>退出登录
                            </t-dropdown-item>
                        </t-dropdown-menu>
                    </template>
                    <t-button class="header-user-btn" theme="default" variant="text">
                        <template #icon>
                            <t-icon class="header-user-avatar" name="user-circle" />
                        </template>
                        <div class="header-user-account">{{ userstore.userldap.cn }}</div>
                        <template #suffix><t-icon name="chevron-down" /></template>
                    </t-button>
                </t-dropdown>
            </template>
        </t-head-menu>
    </t-header>
</template>


<script setup lang="ts">


import { useLogin } from '@/stores';
import router from '@/router';

import { useUser } from '@/stores';

const userstore = useUser()



const handleNav = (url: string) => {
    router.push(url);
};


const handleLogout = () => {
    router.push({
        path: '/login',
        query: { redirect: encodeURIComponent(router.currentRoute.value.fullPath) },
    });
};


</script>