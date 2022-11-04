import { createContext, useContext } from "react";

export const UserAuthContext = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

export function useUserAuth() {
  const { user, logIn, logOut } = useContext(UserAuthContext);
  return { user, logIn, logOut };
}
