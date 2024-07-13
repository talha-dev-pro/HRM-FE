import { useState } from "react";
import logo from "../../../media/Logo PNG/main-w.png";

const SignUpDetails = ({}) => {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyPhoone, setCompanyPhone] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyDescription, setCompanyDescripiton] = useState("");

  return (
    <>
      <div className=" w-full h-full bg-white ">
        <div className="overflow-hidden rounded-md bg-white h-40 w-full flex justify-center relative">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex justify-center items-center flex-wrap">
          <h1 className=" text-lg font-semibold w-full flex justify-center">
            {"Register your Company"}
          </h1>
          <div className="flex flex-col items-center justify-center h-full w-3/5 py-4 bg-purple-100 rounded-md">
            <form className="flex flex-col items-start justify-start px-2 py-4 w-3/5 h-full">
              <label className=" font-semibold">{"Company Name: "}</label>
              <input
                type="text"
                className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200"
                required
                placeholder="Name"
                onChange={(event) => {
                  setCompanyName(event.target.value);
                }}
              />
              <label className=" font-semibold">{"Company Address: "}</label>
              <textarea
                className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200 "
                required
                placeholder="Enter Company Address"
                onChange={(event) => {
                  setCompanyAddress(event.target.value);
                }}
              />
              <label className=" font-semibold">
                {"Enter Company Phone Number: "}
              </label>
              <input
                type="number"
                className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200"
                required
                placeholder="Phone Number"
                onChange={(event) => {
                  setCompanyPhone(event.target.value);
                }}
              />
              <label className=" font-semibold">
                {"Enter Company Website: "}
              </label>
              <input
                type="text"
                className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200"
                required
                placeholder="Website"
                onChange={(event) => {
                  setCompanyWebsite(event.target.value);
                }}
              />
              <label className=" font-semibold">
                {"Company Description: "}
              </label>
              <textarea
                className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200 "
                required
                placeholder="Enter Company Description"
                onChange={(event) => {
                  setCompanyDescripiton(event.target.value);
                }}
              />
            </form>
            <div className="w-full h-1/5 flex items-center justify-center">
              <button className=" bg-purple-400 rounded-md px-4 py-2 w-1/5 text-white">
                {"Register"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpDetails;
