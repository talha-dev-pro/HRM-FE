import PropTypes from "prop-types";
import logo from "../../../../media/Logo PNG/main-w.png";
import { useState } from "react";

const CompanyLogin = ({ updateLogin }) => {
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPassword, setCompanyPassword] = useState("");

  return (
    <>
      <div className=" w-full h-full bg-purple-100 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-4/5 w-1/5 bg-white rounded-md">
          <div className="flex items-center justify-center overflow-hidden rounded-md">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="font-semibold ">{"Sign In"}</h1>
          <form className="flex flex-col items-start justify-start px-2 py-2 w-full h-6/7">
            <label className=" font-semibold">{"Email: "}</label>
            <input
              type="text"
              className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200"
              required
              placeholder="Enter Email"
              onChange={(event) => {
                setCompanyEmail(event.target.value);
              }}
            />
            <label className=" font-semibold">{"Password: "}</label>
            <input
              type="password"
              className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200 "
              required
              placeholder="Enter password"
              onChange={(event) => {
                setCompanyPassword(event.target.value);
              }}
            />
          </form>
          <div className="flex justify-start flex-wrap w-full px-2 h-1/5">
            <p>
              {"Don't have an account? "}
              <span
                className="font-semibold hover:underline hover:text-purple-400 cursor-pointer"
                onClick={() => {
                  updateLogin(false);
                }}
              >
                {"SignUp"}
              </span>
            </p>
          </div>
          <div className="w-full h-1/5 flex items-end justify-center py-4">
            <button className=" bg-purple-400 rounded-md px-4 py-2 w-4/5 text-white">
              {"Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

CompanyLogin.propTypes = {
  updateLogin: PropTypes.func,
};

export default CompanyLogin;
