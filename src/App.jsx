import { useState } from "react";
import LogoComponent from "./Components/LogoComponent";
import SignUpDetails from "./Components/SignUpDetails";
import Index from "./Components/layouts";
import CompanyLogin from "./Components/CompanyLogin";
import CompanySignUp from "./Components/CompanySignUp";

function App() {
  const [login, setLogin] = useState(false);
  const [logo, setlogo] = useState(true);

  const updateLogo = (newState) => {
    setlogo(newState);
  };
  const updateLogin = (newState) => {
    setLogin(newState);
  };

  return (
    <>
      <div className="w-screen h-screen">
        {/* {logo ? (
          <LogoComponent updateLogo={updateLogo} />
        ) : login ? (
          <CompanyLogin updateLogin={updateLogin} />
        ) : (
          <CompanySignUp updateLogin={updateLogin} />
        )} */}
        <Index />
      </div>
    </>
  );
}

export default App;
