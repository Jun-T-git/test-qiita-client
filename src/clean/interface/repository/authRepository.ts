import { Auth } from '~/clean/entity/auth';
import { Token } from '~/clean/interface/useCase/authUseCase';

export default interface AuthRepositoryInterface {
  fetch(auth: Auth): Promise<Token>;
}
