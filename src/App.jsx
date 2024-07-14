import { useState } from "react";
import LogoComponent from "./Components/company/LogoComponent";
import SignUpDetails from "./Components/company/SignUpDetails";
import Index from "./Components/layouts";
import CompanyLogin from "./Components/company/CompanyLogin";
import CompanySignUp from "./Components/company/CompanySignUp";

function App() {
  const [logo, setlogo] = useState(true);
  const [login, setLogin] = useState(false);
  const [details, setDetails] = useState(false);
  const [reg, setReg] = useState(false);
  const [auth, setAuthIn] = useState(false);

  const updateLogo = (newState) => {
    setlogo(newState);
  };
  const updateLogin = (newState) => {
    setLogin(newState);
  };
  const enterDetails = (newState) => {
    setDetails(newState);
  };
  const registered = (newState) => {
    setReg(newState);
  };
  const checkIn = (newState) => {
    setAuthIn(newState);
  };

  return (
    <>
      <div className="w-screen h-screen">
        {logo ? (
          <LogoComponent updateLogo={updateLogo} />
        ) : login ? (
          <CompanyLogin updateLogin={updateLogin} checkIn={checkIn} />
        ) : auth ? (
          <Index />
        ) : details ? (
          <SignUpDetails registered={registered} />
        ) : reg ? (
          <Index />
        ) : (
          <CompanySignUp
            updateLogin={updateLogin}
            enterDetails={enterDetails}
          />
        )}

        {/* <Index /> */}
      </div>
    </>
  );
}

export default App;
