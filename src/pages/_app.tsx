import React, { useEffect, useRef, useState } from 'react';

import '~/pages/style.css';

export default function MyApp({ Component, pageProps }) {
  const ref = useRef();
  const key = process.env.NEXT_PUBLIC_API_TOKEN;
  const [hasToken, setHasToken] = useState<boolean>(false);
  useEffect(() => {
    if (key) {
      setHasToken(true);
    }
  }, [ref]);
  return <Component {...pageProps} hasToken={hasToken} />;
}
