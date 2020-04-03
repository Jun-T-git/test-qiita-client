import { AuthUseCase, Token } from '~/interface/useCase/authUseCase';
import { Auth } from '~/domain/auth';
import AuthRepository from '~/interface/repository/authRepository';

export default class AuthUseCaseImpl implements AuthUseCase {
  readonly authRepository: AuthRepository;

  constructor(repository: AuthRepository) {
    this.authRepository = repository;
  }
  async fetchToken(auth: Auth): Promise<Token> {
    return await this.authRepository.fetch(auth);
  }
}
