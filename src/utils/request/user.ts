import request from '@/utils/request/axios'
import type { AxiosResponse } from 'axios'
import type { IResponseData } from '@/typeing/axios'








//{"mydata":[{"id":1,"name":"aa"},{"id":2,"name":"bb"}],"succes":true}
export  function GetNav() {
    return request<any,IResponseData>({
        url: "/api/nav",
        method: "get",
    }).then(res=>{
        return res.data
    })
}

