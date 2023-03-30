<template>
    <div ref="chartRef" class="echarts"></div>
</template>

<script setup lang="ts">


import * as echarts from 'echarts';
import { computed, markRaw, watch, onMounted, ref } from 'vue';
let chartRef = ref<HTMLElement>();
let myChart = ref();

const resizeHandler = () => {
    myChart.value.resize()
}
const props = defineProps({
    options: {
        type: Object,
        default: {},
        required: true
    },
    width: {
        type: String,
        default: '400px',
        required: true
    },
    height: {
        type: String,
        default: '400px',
        required: true
    },
})

onMounted(() => {
    // 写法1：console.log(chartRef.value as HTMLElement)
    // 写法2 console.log(chartRef.value!)
    myChart.value = markRaw(echarts.init(chartRef.value!))
    myChart.value.setOption(props.options);
    window.addEventListener('resize', resizeHandler)

})

watch(() => props.options, (newOptions) => {
    myChart.value.setOption(newOptions)
}, {
    deep: true
})

const width = computed(() => {
    return props.width;
})
const height = computed(() => {
    return props.height;
})
</script>

<style lang="less" >
.echarts {
    width: 100%;
    height: 50%;
}
</style>