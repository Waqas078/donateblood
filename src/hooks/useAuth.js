import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  const [isAuthenticated, setAuthenticated] = useState(
    Cookies.get("blood-bank") ? true : false
  );

  const login = (token) => {
    Cookies.set("blood-bank", token);
    setAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove("blood-bank");
    setAuthenticated(false);
    console.log("Cookies Destroyed");
    navigate("/");
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
