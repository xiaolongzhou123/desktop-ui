<template>
    <!-- 父元素宽度不能超过 100% -->
    <div class="tdesign-demo-block-column" style="width: 100%">



        <!-- 如果希望表格列宽自适应，设置 `table-layout: auto` 即可。需同时设置 table-content-width -->
        <!-- fixedRows: [2, 2] 表示冻结表格的头两行和尾两行 -->
        <!-- footData 可以是多行，均支持固定在底部 -->
        <t-table row-key="index" :data="data" :foot-data="[{}]" :columns="columns" :table-layout="tableLayout"
            :table-content-width="tableLayout === 'fixed' ? undefined : '1600px'"
            :max-height="fixedTopAndBottomRows ? 500 : 300" :fixed-rows="fixedTopAndBottomRows ? [2, 2] : undefined"
            bordered resizable>
            <template #operation="{ row }">
                <a class="t-button-link" @click="rehandleClickOp(row)">管理</a>
                <a class="t-button-link" @click="handleClickDelete(row)">删除</a>
            </template>


        </t-table>
    </div>


    <t-space>

        <t-dialog v-model:visible="visible" :data="selectUser" header="修改用户属性" body="对话框内容" attach="body"
            :confirm-on-enter="true" :on-cancel="onCancel" :on-esc-keydown="onEscKeydown"
            :on-close-btn-click="onCloseBtnClick" :on-overlay-click="onOverlayClick" :on-close="close"
            :on-confirm="onConfirmAnother">
            <t-form ref="form" :data="selectUser" :colon="true">
                <t-form-item label="中文名" name="myName">
                    <t-input v-model="selectUser.myName"></t-input>
                </t-form-item>

                <t-form-item label="手机号码" name="myPhone">
                    <t-input v-model="selectUser.myPhone"></t-input>
                </t-form-item>
                <t-form-item label="二次密钥" name="myGoogle">
                    <t-input v-model="selectUser.myGoogle"></t-input>
                </t-form-item>
                <t-form-item label="所在部门" name="myDep">
                    <t-input v-model="selectUser.myDep"></t-input>
                </t-form-item>
                <t-form-item label="职位" name="myPostion">
                    <t-input v-model="selectUser.myPostion"></t-input>
                </t-form-item>

            </t-form>
        </t-dialog>
    </t-space>
</template>

<script setup lang="ts">
import type { IResponseData, IUserLdap } from '@/typeing';
import { getUsersLdap, delUserLdap, putUserLdap } from '@/utils/http';
import { MessagePlugin } from 'tdesign-vue-next';
import { ref } from 'vue';

const fixedTopAndBottomRows = ref(false);
const tableLayout = ref('fixed');
const columns = ref([
    { colKey: 'cn', title: '用户名', width: '100', foot: '共20条', fixed: 'left' },
    { colKey: 'myName', title: '姓名', width: '100', },
    { colKey: 'myPhone', title: '手机号', width: '150', },
    { colKey: 'myGoogle', title: '二次密钥', width: '150' },
    { colKey: 'myDep', title: '所在部门', width: '150', foot: '-' },
    { colKey: 'myLeader', title: '直属领导', width: '150' },
    { colKey: 'myReg', title: '创建日期', width: '120', foot: '-' },
    {
        colKey: 'operation', title: '操作', width: '150',
    },
]);

let data = ref([] as IUserLdap[])
let selectUser = ref({} as IUserLdap)
getUsersLdap().then((res: IUserLdap[]) => {
    data.value = res
})

const rehandleClickOp = (row: IUserLdap) => {
    console.log(row);
    selectUser.value = row
    visible.value = true;
    // putUserLdap(row).then((res: IResponseData) => {


    // })
};
const handleClickDelete = (row: IUserLdap) => {
    console.log(row);
    delUserLdap(row).then((res: IResponseData) => {
        if (res.code !== 200) {
            MessagePlugin.error("删除失败：" + res.message);
        } else {
            MessagePlugin.success("删除成功:" + res.message);
            getUsersLdap().then((res: IUserLdap[]) => {
                data.value = res
            })
        }
    })

};



const visible = ref(false);

const onConfirmAnother = (context: any) => {
    console.log('点击了确认按钮', context);
    visible.value = false;
    putUserLdap(selectUser.value).then((res: IResponseData) => {
        if (res.code !== 200) {
            MessagePlugin.error("更新失败：" + res.message);
        } else {
            MessagePlugin.success("更新成功:" + res.message);
            getUsersLdap().then((res: IUserLdap[]) => {
                data.value = res
            })
        }
    })
};
const close = (context: any) => {
    console.log('关闭弹窗，点击关闭按钮、按下ESC、点击蒙层等触发', context);
};
const onCancel = (context: any) => {
    console.log('点击了取消按钮', context);
};
const onEscKeydown = (context: any) => {
    console.log('按下了ESC', context);
};
const onCloseBtnClick = (context: any) => {
    console.log('点击了关闭按钮', context);
};
const onOverlayClick = (context: any) => {
    console.log('点击了蒙层', context);
};
</script>


<style lang="less"></style>