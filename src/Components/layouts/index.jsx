import { useContext, useState } from "react";
import Home from "../../Home";
import Header from "./Header";
import { LoginContext } from "../../App";

const Index = () => {
  const [header, setHeader] = useState("Dashboard");
  // const [auth, setAuth] = useContext(LoginContext);

  return (
    <>
      <div className=" h-full w-full bg-white">
        <Header setHeader={setHeader} />
        <Home header={header} />
      </div>
    </>
  );
};
export default Index;
