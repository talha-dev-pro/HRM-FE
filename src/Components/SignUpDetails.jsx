import logo from "../../../media/Logo PNG/main-w.png";

const SignUpDetails = ({ updateLogin }) => {
  return (
    <>
      <div className=" w-full h-full bg-white ">
        <div className="overflow-hidden rounded-md bg-white h-40 w-full flex justify-center absolute top-0">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col flex-wrap bg-slate-500">
          <div>
            <div className=" h-full w-1/2 bg-white rounded-md">
              <form className="flex flex-col items-start justify-start px-2 py-2 w-full h-6/7">
                <label className=" font-semibold">{"Email: "}</label>
                <input
                  type="text"
                  className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200"
                  required
                  placeholder="Enter Email"
                />
                <label className=" font-semibold">{"Password: "}</label>
                <input
                  type="password"
                  className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200 "
                  required
                  placeholder="Enter password"
                />
                <label className=" font-semibold">{"Confirm Password: "}</label>
                <input
                  type="password"
                  className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200"
                  required
                  placeholder="Confirm pssword"
                />
              </form>
              <div className="flex justify-start flex-wrap w-full px-2">
                <p>
                  {"Already have an account? "}
                  <span
                    className="font-semibold hover:underline hover:text-purple-400 cursor-pointer"
                    onClick={() => {
                      updateLogin(true);
                    }}
                  >
                    {"Login"}
                  </span>
                </p>
              </div>
              <div className="w-full h-1/5 flex items-center justify-center">
                <button className=" bg-purple-400 rounded-md px-4 py-2 w-4/5 text-white">
                  {"SignUp"}
                </button>
              </div>
            </div>
            <div>
              <div className=" h-full w-1/2 bg-white rounded-md">
                <form className="flex flex-col items-start justify-start px-2 py-2 w-full h-6/7">
                  <label className=" font-semibold">{"Email: "}</label>
                  <input
                    type="text"
                    className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200"
                    required
                    placeholder="Enter Email"
                  />
                  <label className=" font-semibold">{"Password: "}</label>
                  <input
                    type="password"
                    className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200 "
                    required
                    placeholder="Enter password"
                  />
                  <label className=" font-semibold">
                    {"Confirm Password: "}
                  </label>
                  <input
                    type="password"
                    className="w-full h-10 rounded-md border-2 border-gray-300 bg-gray-200"
                    required
                    placeholder="Confirm pssword"
                  />
                </form>
                <div className="flex justify-start flex-wrap w-full px-2">
                  <p>
                    {"Already have an account? "}
                    <span
                      className="font-semibold hover:underline hover:text-purple-400 cursor-pointer"
                      onClick={() => {
                        updateLogin(true);
                      }}
                    >
                      {"Login"}
                    </span>
                  </p>
                </div>
                <div className="w-full h-1/5 flex items-center justify-center">
                  <button className=" bg-purple-400 rounded-md px-4 py-2 w-4/5 text-white">
                    {"SignUp"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpDetails;
