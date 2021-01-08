import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-oauth2';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord')
{
	constructor() {
		super({
			authorizationURL: "https://discordapp.com/api/oauth2/authorize?authParams",
			tokenURL        : "https://discordapp.com/api/oauth2/token",
			clientID        : 'CLIENT_ID',
			clientSecret    : 'CLIENT_SECRET',
			callbackURL     : null,
			scope           : null,
		});
	}

	async validate(
        accessToken: string,
        profile: any,
        done: VerifyCallback,
      ): Promise<any> {
        const { name } = profile;
        const user = {
            firstName: name.givenName,
            lastName: name.familyName,
            accessToken
        }
        done(null, user);
      }
}