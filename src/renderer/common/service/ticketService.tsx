import API from '../../common/service/api'
import { AxiosResponse } from 'axios';

export const getTickets = async (): Promise<AxiosResponse> => {
    return API.get("/tickets")
}

export const getMyTickets = async (): Promise<AxiosResponse> => {
    return API.get("/show_many")
}
