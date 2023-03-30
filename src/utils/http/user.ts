import request from '@/utils/http/axios'

import type { IResponseData, ILogin, ILoginData, IUser, IUserLdap } from '@/typeing'








//{"mydata":[{"id":1,"name":"aa"},{"id":2,"name":"bb"}],"succes":true}
export function getUser() {
    return request<any, IResponseData<IUser>>({
        url: "/ssoapi/user",
        method: "get",
    }).then(res => {
        return res.data
    })
}

export function getUserLdap() {
    return request<any, IResponseData<IUserLdap>>({
        url: "/ssoapi/ldap_user",
        method: "get",
    }).then(res => {
        return res.data
    })
}
export function getUsersLdap() {
    return request<any, IResponseData<IUserLdap[]>>({
        url: "/ssoapi/admin/users",
        method: "get",
    }).then(res => {
        return res.data
    })
}


export function addUserLdap(data: any) {
    return request<any, IResponseData<void>>({
        url: "/ssoapi/admin/ldap_user",
        method: "post",
        data: data,
    }).then(res => {
        return res
    })
}
export function putUserLdap(data: any) {
    return request<any, IResponseData<void>>({
        url: "/ssoapi/admin/ldap_user",
        method: "put",
        data: data,
    }).then(res => {
        return res
    })
}
export function delUserLdap(data: any) {
    return request<any, IResponseData<void>>({
        url: "/ssoapi/admin/ldap_user",
        method: "delete",
        data: data,
    }).then(res => {
        return res
    })
}