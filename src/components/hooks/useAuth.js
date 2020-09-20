import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

function useProvideAuth(propUser) {
  const [user, setUser] = useState(propUser);

  const signout = async () => {
    try {
      await axios.get("/signout");

      setUser(null);

      window.location.assign("/");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return {};
    }
  };

  useEffect(() => {
    setUser(user);
  }, [user]);

  return {
    user,
    signout,
  };
}

// eslint-disable-next-line react/prop-types
export const ProvideAuth = ({ children, user }) => {
  const auth = useProvideAuth(user);
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};
