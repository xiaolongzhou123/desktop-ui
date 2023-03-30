<template>
    <div class="add-box">
        <div class="form-box">
            <t-form ref="form" :label-width="100" class="base-form" label-align="top" :data="formData" :colon="true">
                <div class="title">添加用户</div>

                <!-- 合同名称,合同类型 -->
                <t-row class="row-gap" :gutter="[32, 24]">
                    <t-col :span="6">
                        <t-form-item label="用户名英文" name="cn">
                            <t-input v-model="formData.cn" :style="{ width: '322px' }" placeholder="请输入内容" />
                        </t-form-item>
                    </t-col>
                    <t-col :span="6">
                        <t-form-item label="用户名中文" name="myName">
                            <t-input v-model="formData.myName" :style="{ width: '322px' }" placeholder="请输入内容" />
                        </t-form-item>
                    </t-col>



                    <t-col :span="6">
                        <t-form-item label="公司名称" name="myCompanyGroup">
                            <t-input v-model="formData.myCompanyGroup" :style="{ width: '322px' }" placeholder="请输入内容" />
                        </t-form-item>
                    </t-col>
                    <t-col :span="6">
                        <t-form-item label="所在部门" name="myDep">
                            <t-input v-model="formData.myDep" :style="{ width: '322px' }" placeholder="请输入内容" />
                        </t-form-item>
                    </t-col>


                    <t-col :span="6">
                        <t-form-item label="手机号码" name="myPhone">
                            <t-input v-model="formData.myPhone" :style="{ width: '322px' }" placeholder="请输入内容" />
                        </t-form-item>
                    </t-col>
                    <t-col :span="6">
                        <t-form-item label="座机号码" name="myTel">
                            <t-input v-model="formData.myTel" :style="{ width: '322px' }" placeholder="请输入内容" />
                        </t-form-item>
                    </t-col>


                    <t-col :span="6">
                        <t-form-item label="邮箱" name="myEmail">
                            <t-input v-model="formData.myEmail" :style="{ width: '322px' }" placeholder="请输入内容" />
                        </t-form-item>
                    </t-col>
                    <t-col :span="6">
                        <t-form-item label="直属领导" name="myLeader">
                            <t-input v-model="formData.myLeader" :style="{ width: '322px' }" placeholder="请输入内容" />
                        </t-form-item>
                    </t-col>



                    <t-col :span="6">
                        <t-form-item label="职位" name="myPostion">
                            <t-input v-model="formData.myPostion" :style="{ width: '322px' }" placeholder="请输入内容" />
                        </t-form-item>
                    </t-col>
                    <t-col :span="6">
                        <t-form-item label="注册时间" name="myReg">
                            <t-input v-model="formData.myReg" :style="{ width: '322px' }" placeholder="请输入内容" />
                        </t-form-item>
                    </t-col>



                    <!-- 姓别 -->
                    <t-col :span="8">
                        <t-form-item label="姓别" name="myGender">
                            <t-radio-group default-value="true" @change="onGender">
                                <t-radio value="true"> 男 </t-radio>
                                <t-radio value="false"> 女 </t-radio>
                            </t-radio-group>


                        </t-form-item>
                    </t-col>

                    <!-- 姓别 -->
                    <t-col :span="6">
                        <!-- <t-form-item>
                            <t-button theme="primary" type="submit" block>注册</t-button>
                        </t-form-item> -->
                    </t-col>
                    <t-col :span="6">
                        <t-form-item>
                            <t-button theme="primary" type="submit" @click="reg">注册</t-button>
                        </t-form-item>
                    </t-col>






                </t-row>



            </t-form>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { IResponseData, IUserLdap } from '@/typeing';
import { MessagePlugin, type FormRule } from 'tdesign-vue-next';
import { reactive } from 'vue'
import { addUserLdap } from '@/utils/http'
import { getNowFormatDate } from '@/utils/tools';






let formData = reactive({
    cn: '',
    sn: '',
    myName: '',
    myPhone: '18510005758',
    myTel: '010-85053443-2568',
    myEmail: '11688459@qq.com',
    myGoogle: '',
    myLeader: '某张三',
    myPostion: '开发工程师',
    myReg: getNowFormatDate(),
    myDep: '运维部',
    myCompanyGroup: '北京分公司',
    myGender: true
})





const reg = () => {

    formData.sn = formData.cn
    console.log("click", formData)
    addUserLdap(formData).then((res: IResponseData) => {

        if (res.code !== 200) {
            MessagePlugin.error("添加用户失败：" + res.message);
        } else {
            MessagePlugin.success("添加用户成功：" + res.message);

        }
    })

}




const onGender = (checkedValues: boolean) => {
    console.log(checkedValues)
}
const onEnter = () => {

}


</script>


<style lang="less">
.t-row {
    display: flex;
    flex-flow: row wrap;
}

.add-box {
    width: 100%;
    height: 100%;
    background-color: #fff;
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
    justify-content: center;

    background-color: var(--td-bg-color-container);
    border-radius: var(--td-radius-medium) var(--td-radius-medium) 0 0;
    padding: var(--td-comp-paddingTB-xxl) var(--td-comp-paddingLR-xxl) 80px var(--td-comp-paddingLR-xxl);


    .form-box {
        width: 676px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            margin-top: 20px;
            text-align: center;
            font: var(--td-font-title-large);
            font-weight: 400;
            color: var(--td-text-color-primary);
            margin: var(--td-comp-margin-xxl) 0 var(--td-comp-margin-xl) 0;
        }

        .row-gap {
            margin-top: 20px;

        }


    }
}
</style>

