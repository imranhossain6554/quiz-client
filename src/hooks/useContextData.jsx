import { useState } from "react";
import { isAuth } from "../utilities/helper";

const useContextData = () => {
  const [user, setUser] = useState(isAuth());
  const [isLoading, setIsLoading] = useState(false);

  const [authError, setAuthError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  return {
    user,
    setUser,
    token,
    setToken,
    isLoading,
    setIsLoading,
    authError,
    setAuthError,
    authSuccess,
    setAuthSuccess,
    admin,
    setAdmin,
  };
};

export default useContextData;
