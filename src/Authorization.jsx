import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthentificationContext } from "./AuthentificationProvider";
import { Unauthorized } from "./Unauthorized";

export const Authorization = ({ permissions }) => {
  const { isLoggedIn } = useContext(AuthentificationContext);

  if (isLoggedIn.name) {
    const userPermissions = isLoggedIn.permissions;
    const isAllowed = permissions.some((allowed) =>
      userPermissions.includes(allowed)
    );
    return isAllowed ? <Outlet/> : <Unauthorized/>;
  } 

  return <Navigate to="/login" />;
};
