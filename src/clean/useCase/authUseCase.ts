import {
  AuthUseCaseInterface,
  Token,
} from '~/clean/interface/useCase/authUseCase';
import { Auth } from '~/clean/entity/auth';
import AuthRepositoryInterface from '~/clean/interface/repository/authRepository';

export default class AuthUseCase implements AuthUseCaseInterface {
  readonly authRepository: AuthRepositoryInterface;

  constructor(repository: AuthRepositoryInterface) {
    this.authRepository = repository;
  }
  async fetchToken(auth: Auth): Promise<Token> {
    return await this.authRepository.fetch(auth);
  }
}
