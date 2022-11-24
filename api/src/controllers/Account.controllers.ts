import { Request, Response } from "express";
import { Body, Delete, Get, HttpError, JsonController, Param, Params, Post, Put, Req, Res } from "routing-controllers";
import { accountBody, accountNotPasswordBody, enableAccountBody, updateAccountBody } from "../dto's/Account.dto";
import { enableAccount, findAccount, newAccountNotPassword, notActiveAccount, registerAccount, updateAccountEmail } from "../services/Account.service";

@JsonController('/account')
export class AccountControllers {

  @Post('/')
  async createAcount(@Body() body: accountBody) {
    return await registerAccount(body);
  };

  @Get('/')
  async getAccouns() {
    return await findAccount(undefined);
  };

  @Get('/:id')
  async getAccounById(@Param('id') id: number) {
    return await findAccount(+id);
  };

  @Put('/')
  async updateAccount(@Body() body: updateAccountBody) {
    return await updateAccountEmail(body);
  };

  @Delete('/:id')
  async deleteAccount(@Param('id') id: number) {
    return await notActiveAccount(id)
  };

  @Post('/notPassword')
  async createAccountNotPassword(@Body() body: accountNotPasswordBody) {
    return await newAccountNotPassword(body)
  }

  @Put('/enable')
  async forgotPassword(@Body() body: enableAccountBody) {
    return await enableAccount(body)
  };
}







