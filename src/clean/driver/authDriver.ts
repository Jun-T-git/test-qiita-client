import AuthDriver, { AuthJson } from '~/clean/interface/driver/authDriver';
import { Auth } from '~/clean/entity/auth';
import { fetchToken } from '~/clean/driver/utility/axios';

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
