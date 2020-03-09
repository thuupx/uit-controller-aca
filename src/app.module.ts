import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentModule } from './agent/agent.module';

@Module({
    imports: [HttpModule, AgentModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
