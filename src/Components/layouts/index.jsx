import { useState } from "react";
import Home from "../../Home";
import Header from "./Header";

const Index = () => {
  const [header, setHeader] = useState("Dashboard");

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
