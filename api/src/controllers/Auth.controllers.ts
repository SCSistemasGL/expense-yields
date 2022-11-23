import { Delete, Get, JsonController, Param, Post, Req, Res, UseAfter, UseBefore, Put, Body } from "routing-controllers";

import { Request, Response } from "express";
import { authForgotPassword, authLogin } from "../services/Auth.service";
import { loginBody } from "../dto's/Auth.dto";

@JsonController('/auth')
export class AuthController {
  @Post('/login')
  async login(@Body() body: loginBody) {
    return await authLogin(body)
  };

  @Put('/forgotPassword')
  async forgotPassword(@Req() req: Request, @Res() res: Response) {
    try {
      const isNewPassword = await authForgotPassword(req.body)
      res.status(200).send(isNewPassword)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        res.status(500).send({ error: error.message });
      }
    }
  };
}