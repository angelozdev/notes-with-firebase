import { createContext } from "react";
import { IAuthContext } from "./types";

export const AuthContext = createContext<IAuthContext>({
  user: null,
  isLogged: () => false,
  login: () => {},
});

export default AuthContext;
