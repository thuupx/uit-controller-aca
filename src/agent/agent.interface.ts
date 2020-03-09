import { AxiosRequestConfig, AxiosResponse } from "axios";
export interface Agent {
    internalHost: string
    externalHost: string
    adminURL: string
    requestPath: string
    adminRequest: (config: AxiosRequestConfig) => Promise<AxiosResponse>
}