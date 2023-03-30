<template>
    <div class="user-box">
        <div class="hello">
            <span class="name">Hi {{ userstore.userldap.cn }}[{{ userstore.userldap.myName }}]</span>
            <span class="regular">下午好，欢迎登陆网络运维管理平台～
            </span>
        </div>
        <div class="userinfo">

            <div class="tcard">

                <div class="title">个人信息</div>
                <div class="body">
                    <div>
                        <div class="item">手机</div>
                        <div class="item_detail">{{ userstore.userldap.myPhone }}</div>
                    </div>
                    <div>
                        <div class="item">座机</div>
                        <div class="item_detail">{{ userstore.userldap.myTel }}</div>
                    </div>
                    <div>
                        <div class="item">邮箱</div>
                        <div class="item_detail">{{ userstore.userldap.myEmail }}</div>
                    </div>
                    <div>
                        <div class="item">Token</div>
                        <div class="item_detail">{{ userstore.userldap.myGoogle }}</div>
                    </div>
                    <div>
                        <div class="item">直属上级</div>
                        <div class="item_detail">{{ userstore.userldap.myLeader }}</div>
                    </div>
                    <div>
                        <div class="item">职位</div>
                        <div class="item_detail">{{ userstore.userldap.myPostion }}</div>
                    </div>
                    <div>
                        <div class="item">入职时间</div>
                        <div class="item_detail">{{ userstore.userldap.myReg }}</div>
                    </div>
                    <div>
                        <div class="item">所在部门</div>
                        <div class="item_detail">{{ userstore.userldap.myDep }}</div>
                    </div>

                </div>

            </div>

            <div class="visit"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next';
import { useUser } from '@/stores';

const userstore = useUser()


const clickHandler = () => {
    MessagePlugin.success('操作');
};



</script>


<style lang="less">
.user-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 20px;


    .hello {
        height: 100px;
        background-color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 0;


        .name {
            font-weight: bold;
            margin-left: 20px;
            padding: 16px;
            font-size: 16px;
        }

        .regular {
            font-size: 16px;
            // margin-left: 15px;
        }
    }

    .userinfo {
        margin-top: 20px;
        height: 400px;
        background-color: white;


        .tcard {
            height: 100%;
            width: 100%;
            margin-left: 20px;
            padding: 24px 16px;

            .title {
                font-weight: bold;
            }

            .body {
                margin-top: 40px;
                display: grid;
                grid-template-rows: repeat(2, 1fr);
                grid-template-columns: repeat(4, 1fr);
                gap: 40px;

                .item {
                    margin: 20px 0 6px;
                    font-size: 14px;
                    line-height: 24px;
                    color: var(--td-text-color-placeholder);
                }

                .item_detail {
                    font-size: 14px;
                    line-height: 40px;
                }
            }
        }

    }



}
</style>