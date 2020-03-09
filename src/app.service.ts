import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import Axios, { AxiosResponse } from 'axios';
const AGENT_URL = process.env.AGENT_URL || 'localhost:5000'
@Injectable()
export class AppService {
    constructor(private httpService: HttpService) {
        //To use Observable
    }
    async getConnection(): Promise<any> {
        console.log("AGENT_URL is : ", AGENT_URL);
        return await Axios.get(`${AGENT_URL}/connections`);
    }
}
