import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const Context = createContext();

const Auth = ({ children }) => {
  const signup = async (userData) => {
    try {
      const user = await axios.post(
        "https://the-techie-crud.onrender.com/user-creation",
        userData
      );
      if (user.data) {
        toast.success("user created account successfully ");
        return user.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  const methods = {
    signup,
  };

  return <Context.Provider value={methods}>{children}</Context.Provider>;
};

export default Auth;
