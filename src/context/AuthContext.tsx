import { createContext, useContext, useEffect } from "react";

interface AuthContextValues {}

const AuthContext = createContext<AuthContextValues>({} as AuthContextValues);

export function AuthContextProvider({ children }: WithChildren) {
  useEffect(() => {
    // console.log("Auth context loaded");
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
