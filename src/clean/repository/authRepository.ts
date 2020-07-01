import AuthRepositoryInterface from '~/clean/interface/repository/authRepository';
import AuthDriverInterface from '~/clean/interface/driver/authDriver';
import { Auth } from '~/clean/entity/auth';
import { Token } from '~/clean/interface/useCase/authUseCase';

export default class AuthRepository implements AuthRepositoryInterface {
  private readonly authDriver: AuthDriverInterface;

  constructor(authDriver: AuthDriverInterface) {
    this.authDriver = authDriver;
  }

  async fetch(auth: Auth): Promise<Token> {
    const { token, errors } = await this.authDriver.fetch(auth);
    if (token) {
      return new Token(token);
    }
    return new Token('');
  }
}
