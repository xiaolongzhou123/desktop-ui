
export interface IUser {
    sn: string
    cn: string
    mail: string
    uid: number
    type: boolean
    exp: number
    iat: number
    iss: string
}

export interface IUserLdap {
    cn: string
    myCompanyGroup: string
    myContactReg: string
    myDep: string
    myEmail: string
    myGoogle: string
    myId: string
    myLeader: string
    myPhone: string
    myPostion: string
    myName: string
    myReg: string
    myTel: string
    sn: string
}