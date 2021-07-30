import { useContext } from "react";
import { AuthContext } from "src/contexts";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
