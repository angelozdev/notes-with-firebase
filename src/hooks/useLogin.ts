import { useEffect } from "react";

import { useAuth } from "./";
import AuthService from "src/services/auth";
import type firebase from "firebase";

function useLogin() {
  const { login, isLogged } = useAuth();

  useEffect(() => {
    let unsubscribe: firebase.Unsubscribe;

    if (isLogged()) return;

    const auth = new AuthService();

    unsubscribe = auth.silentLogin((error, user) => {
      if (error || !user) return;
      login(user);
    });

    return () => unsubscribe?.();
  });
}

export default useLogin;
