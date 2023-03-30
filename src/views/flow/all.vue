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
import { GetProme } from '@/utils/request';
import { currTimestamp } from '@/utils/tools';
import { onMounted, reactive, ref } from 'vue';
import { timestampToTime } from '@/utils/tools/common';


const promestore = useProme()

let options = reactive({
    color: [
        "rgba(39, 120, 255, 1)",

        "rgba(72, 176, 255, 1)",
        "rgba(91, 207, 255, 1)",
        "rgba(108, 227, 255, 1)",
        "rgba(119, 240, 240, 1)",
    ],
    title: {
        text: '出流量',
        subtext: 'ifInOctets'
    },
    xAxis: {
        type: 'category',
        data: [],
        axisLabel: {
            interval: 2,
            color: "red",
            rotate: 90,//倾斜度 -90 至 90 默认为0
            margin: 2,
            fontSize: "12",
            formatter: function (e: any) {
                return timestampToTime(e);
            },
        },
        axisTick: {
            show: false,
        },


    },
    grid: {
        left: "60px",
        bottom: "25%",
        right: "1%",
    },

    yAxis: {
        type: 'value',
        //y轴分隔线的颜色
        splitLine: {
            lineStyle: {
                color: "rgba(119, 240, 240, 0.9)",
            }
        },
        axisLabel: {
            interval: 5,

            formatter: function (e: any) {
                return e
            }
        },

    },
    tooltip: {
        trigger: 'axis',
        formatter: function (e: any) {
            return timestampToTime(e[0].axisValue) + '<br />' + e[0].data;
        }
    },
    series: [
        {
            data: [] as any,
            type: 'line'
        }
    ]
})
let options1 = reactive({
    color: [
        "rgba(0, 204, 255, 1)",
        "rgba(39, 120, 255, 1)",
        "rgba(72, 176, 255, 1)",
        "rgba(91, 207, 255, 1)",
        "rgba(108, 227, 255, 1)",
        "rgba(119, 240, 240, 1)",
    ],
    title: {
        text: '入流量',
        subtext: 'ifOutOctets'
    },
    grid: {
        left: "60px",
        bottom: "25%",
        right: "1%",
    },

    xAxis: {
        type: 'category',
        data: [],

        axisLabel: {
            interval: 2,
            color: "red",
            rotate: 90,//倾斜度 -90 至 90 默认为0
            margin: 2,
            formatter: function (e: any) {
                return timestampToTime(e);
            }
        },
        axisLine: {
            lineStyle: {
                color: "rgba(88, 118, 143, 1)",
            },
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        //y轴分隔线的颜色
        splitLine: {
            lineStyle: {
                color: "rgba(119, 240, 240, 0.9)",
            }
        },
        axisLabel: {
            interval: 5,
            formatter: function (e: any) {
                return e
            }
        },
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (e: any) {
            return timestampToTime(e[0].axisValue) + '<br />' + e[0].data;
        }
    },
    series: [
        {
            data: [] as any,
            type: 'line'
        }
    ]
})


let data1: IProme = {
    step: 60,
    start: currTimestamp - 3600,
    end: currTimestamp,
    index: 1,
}
let data2: IProme = {
    step: 60,
    start: currTimestamp - 3600,
    end: currTimestamp,
    index: 2,
}

onMounted(() => {
    GetProme(data1).then((res: IPromeRes) => {
        promestore.UpdateData(res)
        options.xAxis.data = promestore.x
        options.series[0].data = promestore.y
        console.log(promestore.y)

    })
    GetProme(data2).then((res: IPromeRes) => {
        promestore.UpdateData(res)
        options1.xAxis.data = promestore.x
        options1.series[0].data = promestore.y
        console.log(promestore.y)

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