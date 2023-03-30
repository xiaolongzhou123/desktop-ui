import { timestampToTime } from "@/utils/tools";
import { reactive } from "vue";

export const options = reactive({
    color: [
        "rgba(39, 120, 255, 1)",
        "rgba(72, 176, 255, 1)",
        "rgba(91, 207, 255, 1)",
        "rgba(108, 227, 255, 1)",
        "rgba(119, 240, 240, 1)",
    ],
    title: {
        text: '入流量',
        subtext: 'ifOutOctets',
        left: 'center',
        textStyle: {   // 标题美化
            color: '#50e3c2'   // 标题颜色--红
        }

    },
    xAxis: {
        type: 'category',
        data: [],
        axisLabel: {
            interval: 2,
            color: "#50e3c2",
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
        left: "3%",
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

            formatter: function (value: number) {
                if ((value / (1024 * 1024 * 1024)) > 10) {
                    return (value / (1024 * 1024 * 1024)).toFixed(2) + " Gbps";
                } else if ((value / (1024 * 1024)) > 10) {
                    return (value / (1024 * 1024)).toFixed(2) + " Mbps";
                } else if ((value / (1024)) > 10) {
                    return (value / (1024)).toFixed(2) + " Kbps";
                } else {
                    return value + " bps";
                }
            },
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

// 首页第二个图
export const options1 = reactive({
    color: [
        "rgba(0, 204, 255, 1)",
        "rgba(39, 120, 255, 1)",
        "rgba(72, 176, 255, 1)",
        "rgba(91, 207, 255, 1)",
        "rgba(108, 227, 255, 1)",
        "rgba(119, 240, 240, 1)",
    ],
    title: {
        text: '出流量',
        subtext: 'ifInOctets',
        left: 'center',
    },
    grid: {
        left: "3%",
        bottom: "25%",
        right: "1%",
    },

    xAxis: {
        type: 'category',
        data: [],

        axisLabel: {
            interval: 2,
            color: "#50e3c2",
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

            formatter: function (value: number) {
                if ((value / (1024 * 1024 * 1024)) > 10) {
                    return (value / (1024 * 1024 * 1024)).toFixed(2) + " Gbps";
                } else if ((value / (1024 * 1024)) > 10) {
                    return (value / (1024 * 1024)).toFixed(2) + " Mbps";
                } else if ((value / (1024)) > 10) {
                    return (value / (1024)).toFixed(2) + " Kbps";
                } else {
                    return value + " bps";
                }
            },
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
