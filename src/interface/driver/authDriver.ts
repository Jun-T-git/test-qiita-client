import { Auth } from '~/domain/auth';
import { Token } from '~/interface/useCase/authUseCase';

export type AuthJson = {
  token?: Token;
  errors?: AuthError;
};

export type AuthError = {
  code: number;
  message: string;
};

export default interface AuthDriver {
  fetch(auth: Auth): Promise<AuthJson>;
}
