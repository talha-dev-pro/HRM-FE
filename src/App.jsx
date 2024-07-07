import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import LogoComponent from "./Components/LogoComponent";
import SignUpDetails from "./Components/SignUpDetails";

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
        {logo ? (
          <LogoComponent updateLogo={updateLogo} />
        ) : login ? (
          <Login updateLogin={updateLogin} />
        ) : (
          <SignUp updateLogin={updateLogin} />
        )}
        {/* <SignUpDetails /> */}
      </div>
    </>
  );
}

export default App;
