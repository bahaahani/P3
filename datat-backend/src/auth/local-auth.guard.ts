import { Injectable, UnauthorizedError, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedError('Invalid credentials');
    }
    return user;
  }
}