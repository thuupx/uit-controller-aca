import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AxiosError } from 'axios';
import { Response } from 'express';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get('/connection')
    async getConnection(@Res() res: Response) {
        try {
            const response = await this.appService.getConnection();
            console.log("AppController -> getConnection -> response", response)
            res.json(response.data);

        } catch (error) {
            console.log("AppController -> getConnection -> error", error)
            res.json(error);
        }
    }
}
