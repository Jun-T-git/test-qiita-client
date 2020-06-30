import { Auth } from '~/clean/entity/auth';
import { Token } from '~/clean/interface/useCase/authUseCase';

export default interface AuthControllerInterface {
  fetchToken(auth: Auth): Promise<Token>;
}
