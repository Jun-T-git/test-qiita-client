import React, { useEffect, useRef, useState } from 'react';

import '~/pages/style.css';
import { authController } from '~/clean/utility/instance/logic';
import { Auth } from '~/clean/entity/auth';

export default function MyApp({ Component, pageProps }) {
  const ref = useRef();
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const secret = process.env.NEXT_PUBLIC_API_SECRET;
  const [hasToken, setHasToken] = useState<boolean>(false);
  useEffect(() => {
    if (key && secret) {
      authController.fetchToken(new Auth(key, secret)).then(() => {
        setHasToken(true);
      });
    }
  }, [ref]);
  return <Component {...pageProps} hasToken={hasToken} />;
}
