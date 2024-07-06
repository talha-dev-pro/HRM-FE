import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
  const [login, setLogin] = useState(false);

  const updateLogin = (e) => {
    console.log(e);
    setLogin(e);
  };

  return (
    <>
      <div className="w-screen h-screen">
        {login ? (
          <Login updateLogin={updateLogin} />
        ) : (
          <SignUp updateLogin={updateLogin} />
        )}
      </div>
    </>
  );
}

export default App;
