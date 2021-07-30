import { auth } from "src/firebase/client";
import type firebase from "firebase";
import { User } from "src/contexts/auth/types";

interface Fields {
  email: string;
  password: string;
}

class Auth {
  async createUser(
    { email, password }: Fields,
    callback?: (
      error: Error | null,
      userCredential?: firebase.auth.UserCredential
    ) => void
  ): Promise<firebase.auth.UserCredential> {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        callback?.(null, userCredential);
        return userCredential;
      })
      .catch((error) => {
        callback?.(error);
        return Promise.reject(error);
      });
  }

  async login(
    { email, password }: Fields,
    callback?: (
      error: Error | null,
      userCredential?: firebase.auth.UserCredential
    ) => void
  ) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        callback?.(null, userCredential);
        return userCredential;
      })
      .catch((error) => {
        callback?.(error);
        return Promise.reject(error);
      });
  }

  silentLogin(callback?: (error: Error | null, user?: User) => void) {
    return auth.onAuthStateChanged((user) => {
      if (!user) {
        return callback?.(new Error("There is no user"));
      }
      const { email, uid: id } = user;

      if (!email) {
        return callback?.(new Error("There is no email"));
      }

      callback?.(null, { email, id });
    });
  }
}

export default Auth;
