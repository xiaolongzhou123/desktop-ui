import request from '@/utils/axios'
import type { AxiosResponse } from 'axios'






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
    return request<any,IData>({
        url: "/api/nav",
        method: "get",
    })
}

