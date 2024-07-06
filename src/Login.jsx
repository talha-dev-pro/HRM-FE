import PropTypes from "prop-types";

const Login = ({ updateLogin }) => {
  return (
    <>
      <div className=" w-full h-full bg-gray-400 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-2/5 w-1/5 bg-white rounded-md">
          <div>
            <h1 className="text-3xl font-bold py-2">{"Login Form"}</h1>
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
          </form>
          <div className="flex justify-start flex-wrap w-full px-2 h-1/5">
            <p>
              {"Already have an account? "}
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
          <div className="w-full h-1/5 flex items-end justify-center py-2 ">
            <button className=" bg-purple-400 rounded-md px-2 py-2 w-4/5 text-white">
              {"Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  updateLogin: PropTypes.func,
};

export default Login;
