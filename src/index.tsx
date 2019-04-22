import React, { useState, useEffect } from 'react';
import { createRootNavigator } from './router';
import { isSignedIn } from './auth';

export default function App() {
  const [signedIn, changeSignedIn] = useState(false);
  const [checkedSignIn, changeCheckedSignIn] = useState(false);

  useEffect(() => {
    isSignedIn()
      .then((res: any) => {
        changeSignedIn(res);
        changeCheckedSignIn(true);
      })
      .catch(err => console.error(err));
  }, []);

  if (!checkedSignIn) {
    return null;
  }
  const Layout = createRootNavigator(signedIn);
  return <Layout />;
}
