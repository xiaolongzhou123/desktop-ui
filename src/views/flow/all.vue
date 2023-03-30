<template>
    <div class="prome_box">
        <myProme :options="options" width="50px" height="50px"></myProme>
        <myProme :options="options1" width="50px" height="50px"></myProme>
    </div>
</template>




<script setup lang="ts">
import { useProme } from '@/stores';
import myProme from '@/components/prome.vue';
import type { IProme, IPromeRes } from '@/typeing';
import { GetProme } from '@/utils/http';
import { currTimestamp } from '@/utils/tools';
import { onMounted, reactive, ref } from 'vue';
import { timestampToTime } from '@/utils/tools';
import { options, options1 } from '@/services'

const promestore = useProme()






onMounted(() => {

    //出
    GetProme({ step: 60, start: currTimestamp - 3600, end: currTimestamp, index: 1 }).then((res: IPromeRes) => {
        promestore.UpdateData(res)
        options.xAxis.data = promestore.x
        options.series[0].data = promestore.y
        options.title.subtext = res.query
    })
    //入
    GetProme({ step: 60, start: currTimestamp - 3600, end: currTimestamp, index: 2 }).then((res: IPromeRes) => {
        promestore.UpdateData(res)
        options1.xAxis.data = promestore.x
        options1.series[0].data = promestore.y
        options1.title.subtext = res.query
    })
})




</script>


<style lang="less">
.prome_box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-sizing: border-box;

}
</style>