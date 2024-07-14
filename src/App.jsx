import { createContext, useState } from "react";
import LogoComponent from "./Components/company/LogoComponent";
import SignUpDetails from "./Components/company/SignUpDetails";
import Index from "./Components/layouts";
import CompanyLogin from "./Components/company/CompanyLogin";
import CompanySignUp from "./Components/company/CompanySignUp";
import CheckInEmployees from "./Components/company/CheckedInEmployees";

export const LoginContext = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [logo, setlogo] = useState(true);
  const [auth, setAuth] = useState(true);

  const updateLogo = (newState) => {
    setlogo(newState);
  };
  const updateLogin = (newState) => {
    setLogin(newState);
  };

  return (
    <>
      {/* <LoginContext.Provider value={{ auth, setAuth }}> */}
      <div className="w-screen h-screen">
        {/* {logo ? (
          <LogoComponent updateLogo={updateLogo} />
        ) : login ? (
          <CompanyLogin updateLogin={updateLogin} />
        ) : (
          <CompanySignUp updateLogin={updateLogin} />
        )} */}
        {/* <SignUpDetails /> */}
        <Index />
        {/* <CheckInEmployees /> */}
      </div>
      {/* </LoginContext.Provider> */}
    </>
  );
}

export default App;
