import request from '@/utils/request/axios'

import type { IResponseData } from '@/typeing/axios'








//{"mydata":[{"id":1,"name":"aa"},{"id":2,"name":"bb"}],"succes":true}
export function GetMenu() {
    return request<any, IResponseData>({
        url: "/api/menu/1",
        method: "get",
    }).then(res => {
        return res.data
    })
}

