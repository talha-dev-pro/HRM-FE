import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const isLoggedin = true;
  return <>{isLoggedin ? props.children : <Navigate to={"/login"} />}</>;
};
export default PrivateRoute;
