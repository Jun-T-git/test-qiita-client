import AuthRepository from '~/clean/interface/repository/authRepository';
import AuthDriver, {AuthJson} from '~/clean/interface/driver/authDriver';
import { Auth } from '~/clean/entity/auth';
import {Token} from "~/clean/interface/useCase/authUseCase";

export default class AuthRepositoryImpl implements AuthRepository {
  private readonly authDriver: AuthDriver;

  constructor(authDriver: AuthDriver) {
    this.authDriver = authDriver;
  }

  async fetch(auth: Auth): Promise<Token> {
      const { token, errors } =  await this.authDriver.fetch(auth);
      if(token){
          return new Token(token)
      }
      return new Token('')
  }
}
