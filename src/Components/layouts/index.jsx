import { useState } from "react";
import Home from "../../Home";
import Header from "./Header";
import PropTypes from "prop-types";

const Index = () => {
  const [header, setHeader] = useState("Dashboard");

  const head = (newState) => {
    console.log(true);
    setHeader(newState);
  };

  return (
    <>
      <div className=" h-full w-full bg-white">
        <Header head={head} />
        <Home header={header} />
      </div>
    </>
  );
};
export default Index;
