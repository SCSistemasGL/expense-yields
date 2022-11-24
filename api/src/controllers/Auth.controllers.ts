import { JsonController, Post, Put, Body } from "routing-controllers";

import { authForgotPassword, authLogin } from "../services/Auth.service";
import { forgotPasswordBody, loginBody } from "../dto's/Auth.dto";


@JsonController('/auth')
export class AuthController {
  @Post('/login')
  async login(@Body() body: loginBody) {
    return await authLogin(body);
  };

  @Put('/forgotPassword')
  async forgotPassword(@Body() body: forgotPasswordBody) {
    return await authForgotPassword(body);
  };
}