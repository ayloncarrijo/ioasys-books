import { createContext, useContext } from "react";
import type { User } from "types/api";

interface UserContextValue {
  user: User | null;
}

const UserContext = createContext<UserContextValue | null>(null);

function UserProvider({
  children,
  user,
}: React.PropsWithChildren<UserContextValue>): JSX.Element {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Must be used within a UserProvider");
  }

  return context;
};

export { useUser };
export default UserProvider;
