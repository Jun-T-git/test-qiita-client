import { Auth } from '~/domain/auth';

export class Token {
  readonly token: string;
  constructor(token: string) {
    this.token = token;
  }
}

export interface AuthUseCase {
  fetchToken(auth: Auth): Promise<Token>;
}
