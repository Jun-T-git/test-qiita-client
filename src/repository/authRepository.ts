import AuthRepository from '~/interface/repository/authRepository';
import AuthDriver, {AuthJson} from '~/interface/driver/authDriver';
import { Auth } from '~/domain/auth';
import {Token} from "~/interface/useCase/authUseCase";

export default class AuthRepositoryImpl implements AuthRepository {
  private readonly authDriver: AuthDriver;

  constructor(authDriver: AuthDriver) {
    this.authDriver = authDriver;
  }

  async fetch(auth: Auth): Promise<Token> {
      const { token, errors } =  await this.authDriver.fetch(auth);
      if(token){
          return token
      }
      return new Token('')
  }
}
