import AuthDriver, { AuthJson } from '~/interface/driver/authDriver';
import { Auth } from '~/domain/auth';
import { fetchToken } from '~/utility/axios';

export default class AuthDriverImpl implements AuthDriver {
  async fetch(auth: Auth): Promise<AuthJson> {
    try {
      const response = await fetchToken(auth);
      return { token: response.token };
    } catch (e) {
      return {
        errors: e.response,
      };
    }
  }
}
