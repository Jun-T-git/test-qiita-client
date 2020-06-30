import { Auth } from '~/clean/entity/auth';

export type AuthJson = {
  token?: string;
  errors?: AuthError;
};

export type AuthError = {
  code: number;
  message: string;
};

export default interface AuthDriver {
  fetch(auth: Auth): Promise<AuthJson>;
}
