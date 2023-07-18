import React, { useState, useEffect, useCallback } from "react";
let logoutTimer;
const AuthContext = React.createContext({
  token: " ",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
const calcRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirartion = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirartion - currentTime;
  return remainingDuration;
};
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expiration");
  const remainingTime = calcRemainingTime(storedExpirationDate);
  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return {
    token: storedToken,
    duration: remainingTime,
  };
};
export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initalToken;
  if (tokenData) {
    initalToken = tokenData.token;
  }
  const [token, setToken] = useState(initalToken);

  const userIsLoggdIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("exprationTime");

    if (logoutTimer) clearTimeout(logoutTimer);
  }, []);
  const loginHandler = (token, expirationTime) => {
    setToken(token);

    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationTime);
    const remainingTime = calcRemainingTime(expirationTime);
    //
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);
  const contextValue = {
    token,
    isLoggedIn: userIsLoggdIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
