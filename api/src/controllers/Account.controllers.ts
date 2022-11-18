import { Request, Response } from "express";
import { Body, Delete, Get, HttpError, JsonController, Param, Params, Post, Put, Req, Res } from "routing-controllers";
import { accountBody, updateAccountBody } from "../dto's/Account.dto";
import { findAccount, notActiveAccount, registerAccount, updateAccountEmail } from "../services/Account.service";

@JsonController('/account')
export class AccountControllers {

  @Post('/')
  async createAcount(@Body() body: accountBody) {
    const newUser = await registerAccount(body);
    return newUser
  };

  @Get('/:id')
  async getAccounById(@Param('id') id: number) {
    const isUser = await findAccount(+id);
    return isUser
  };

  @Put('/')
  async updateAccount(@Body() body: updateAccountBody) {
    const isUpdateAccount = await updateAccountEmail(body);
    return isUpdateAccount
  };

  @Delete('/:id')
  async deleteAccount(@Param('id') id: number) {
    const isAccount = await notActiveAccount(id)
    return isAccount
  };

}







