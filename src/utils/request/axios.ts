// src/axios.ts
import axios, { type AxiosRequestConfig } from 'axios'
const env = import.meta.env.VITE_API_BASE_URL;
// const ConfigBaseURL = env.VITE_APP_BASE_SERVER + env.VITE_API_BASE_URL //默认路径，这里也可以使用env来判断环境
const request = axios.create({
    timeout: 5000, // 请求超时时间
    baseURL: '',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

// 泛型接口,T的类型支持
export interface IResponseData<T = any> {
    code: number;
    message: string;
    data: T;
}


// 添加请求拦截器
request.interceptors.request.use(config => {
    // console.log(config)
    return config
})
// 添加响应拦截器
request.interceptors.response.use(response => {
    return response.data
}, error => {
    console.log('Response: error', error)
    const msg = error.Message !== undefined ? error.Message : ''
    // alert(msg)
    return Promise.reject(error)
})



// // 通用的请求函数
// export async function request1<T>(config: AxiosRequestConfig) {
//     return Axios
//         .request<IResponseData<T>>(config)
//         .then((res) => res.data.data);
// }



export default request;
