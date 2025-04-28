import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);

  if(loading) {
    return <span className="loading loading-spinner text-error"></span>
  }

  if (user && user?.email) {
    return children; 
  }
  return <Navigate to="/login" />; 
};

export default PrivateRoute;
