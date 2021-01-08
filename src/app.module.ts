import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { DiscordStrategy } from './discord.strategy';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy, DiscordStrategy],
})
export class AppModule {}
