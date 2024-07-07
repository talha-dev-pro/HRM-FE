import PropTypes from "prop-types";
import logo from "../../media/Logo PNG/main-w.png";

const SignUp = ({ updateLogin }) => {
  return (
    <>
      <div className=" w-full h-full bg-purple-100 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-2/3 w-1/5 bg-white rounded-md">
          <div className="flex items-center justify-center overflow-hidden rounded-md">
            <img src={logo} alt="logo" />
          </div>
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
      </div>
    </>
  );
};

SignUp.propTypes = {
  updateLogin: PropTypes.func,
};

export default SignUp;
