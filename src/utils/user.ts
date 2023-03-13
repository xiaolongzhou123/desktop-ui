import request from '@/utils/axios'
import type { AxiosResponse } from 'axios'




export interface INav {
    userId: number
    id: number
    title: string
    completed: boolean
}


export async function GetNav() {
    return request<INav>({
        url: "/api/nav",
        method: "get",
    });
}

