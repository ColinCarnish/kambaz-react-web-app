import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const currentUser = useSelector((state: any) => state.account.currentUser);
  return currentUser ? children : <Navigate to="/Kambaz/Account/Signin" />;
};

export default ProtectedRoute;