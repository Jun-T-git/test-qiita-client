export class Auth {
  readonly key: string;
  readonly secret: string;

  constructor(key: string, secret: string) {
    this.key = key;
    this.secret = secret;
  }
}
