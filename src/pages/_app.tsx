import React, { useEffect, useRef } from 'react';

import '~/pages/style.css';
import { authController } from '~/clean/utility/instance/logic';
import { Auth } from '~/clean/entity/auth';

export default function MyApp({ Component, pageProps }) {
  const ref = useRef();
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const secret = process.env.NEXT_PUBLIC_API_SECRET;
  useEffect(() => {
    if (key && secret) {
      authController.fetchToken(new Auth(key, secret));
    }
  }, [ref]);
  return <Component {...pageProps} />;
}
