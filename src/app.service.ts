import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googlelogin(req){
    if(!req.user){
      return 'No user from google'
    }

    return {
      message: 'User Info from Google',
      user: req.user,
    }
  }
}
