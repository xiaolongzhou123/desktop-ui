import request from '@/utils/axios'
import type { AxiosResponse } from 'axios'
import type { IResponseData } from '@/utils/axios'






export interface Mydata {
    id: number;
    name: string;
}

export interface IData {
    mydata: Mydata[];
    succes: boolean;
}


//{"mydata":[{"id":1,"name":"aa"},{"id":2,"name":"bb"}],"succes":true}
export  function GetNav() {
    return request<any,IResponseData>({
        url: "/api/nav",
        method: "get",
    }).then(res=>{
        return res.data
    })
}

