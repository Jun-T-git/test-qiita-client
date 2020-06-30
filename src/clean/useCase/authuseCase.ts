import { AuthUseCase, Token } from '~/clean/interface/useCase/authUseCase';
import { Auth } from '~/clean/entity/auth';
import AuthRepository from '~/clean/interface/repository/authRepository';

export default class AuthUseCaseImpl implements AuthUseCase {
  readonly authRepository: AuthRepository;

  constructor(repository: AuthRepository) {
    this.authRepository = repository;
  }
  async fetchToken(auth: Auth): Promise<Token> {
    return await this.authRepository.fetch(auth);
  }
}
