import { Body, Controller, Get, Param, Put, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  async getProfile(@Request() req): Promise<User> {
    return this.userService.findOne(req.user.userId);
  }

  @Put('profile')
  async updateProfile(@Request() req, @Body() updateData: Partial<User>): Promise<User> {
    return this.userService.update(req.user.userId, updateData);
  }

  @Put('change-password')
  async changePassword(@Request() req, @Body() { oldPassword, newPassword }: { oldPassword: string; newPassword: string }): Promise<User> {
    return this.userService.changePassword(req.user.userId, oldPassword, newPassword);
  }

  @Put('email-preferences')
  async updateEmailPreferences(@Request() req, @Body() preferences: string): Promise<User> {
    return this.userService.updateEmailPreferences(req.user.userId, preferences);
  }

  @Get('course-history')
  async getCourseHistory(@Request() req): Promise<any[]> {
    return this.userService.getCourseHistory(req.user.userId);
  }
}