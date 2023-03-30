
export interface IProme {
    step: number
    start: number
    end: number
    index: number
}


export interface IPromeRes {
    status: string
    query: string
    data: Data
}

export interface Data {
    resultType: string
    result: Result[]
}

export interface Result {
    metric: Metric
    values: [number, string][]
}

export interface Metric {
    ifAlias: string
    ifDescr: string
    ifIndex: string
    ifName: string
    instance: string
    job: string
}
