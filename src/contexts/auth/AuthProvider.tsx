import { useCallback, useState, useMemo, PropsWithChildren } from "react";
import { AuthContext } from "./";
import { User } from "./types";

function AuthProvider({ children }: PropsWithChildren<{}>) {
  const [user, setUser] = useState<User | null>(null);

  const isLogged = useCallback(() => {
    return !!user;
  }, [user]);

  const login = (user: User) => {
    setUser(user);
  };

  const contextValue = useMemo(() => {
    return {
      user,
      isLogged,
      login,
    };
  }, [user, isLogged]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
