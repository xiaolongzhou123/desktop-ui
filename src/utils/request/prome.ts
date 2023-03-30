import request from '@/utils/request/axios'

import type { IProme, IResponseData, IPromeRes } from '@/typeing'








//{"mydata":[{"id":1,"name":"aa"},{"id":2,"name":"bb"}],"succes":true}
export function GetProme(data: IProme) {
    return request<any, IResponseData<IPromeRes>>({
        url: "/ssoapi/prome",
        method: "post",
        data: data,
    }).then(res => {
        return res.data
    })
}

