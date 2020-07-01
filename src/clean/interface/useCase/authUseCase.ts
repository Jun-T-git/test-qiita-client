import { Auth } from '~/clean/entity/auth';

export class Token {
  readonly token: string;
  constructor(token: string) {
    this.token = token;
  }
}

export interface AuthUseCaseInterface {
  fetchToken(auth: Auth): Promise<Token>;
}
