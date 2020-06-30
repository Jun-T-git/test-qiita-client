import AuthControllerInterface from '~/clean/interface/controller/authController';
import {
  AuthUseCaseInterface,
  Token,
} from '~/clean/interface/useCase/authUseCase';
import { Auth } from '~/clean/entity/auth';

export default class AuthController implements AuthControllerInterface {
  readonly authUseCase: AuthUseCaseInterface;
  constructor(useCase: AuthUseCaseInterface) {
    this.authUseCase = useCase;
  }
  async fetchToken(auth: Auth): Promise<Token> {
    return await this.authUseCase.fetchToken(auth);
  }
}
