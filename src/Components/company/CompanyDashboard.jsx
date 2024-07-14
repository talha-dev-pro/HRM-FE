import CheckInEmployees from "./CheckedInEmployees";

const CompanyDashboard = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-4/5 h-4/5 bg-purple-200 flex flex-wrap rounded-md">
          <div className="w-1/4 h-full flex flex-col justify-center items-center gap-y-4">
            <button className="font-semibold hover:text-purple-600 cursor-pointer bg-white w-3/5 rounded-md">
              Add Employee
            </button>
            <button className="font-semibold hover:text-purple-600 cursor-pointer bg-white w-3/5 rounded-md">
              Get All Employees
            </button>
            <button className="font-semibold hover:text-purple-600 cursor-pointer bg-white w-3/5 rounded-md">
              Update Employee
            </button>
            <button className="font-semibold hover:text-purple-600 cursor-pointer bg-white w-3/5 rounded-md">
              Fire Employee
            </button>
          </div>
          <div className="w-3/4 h-full flex flex-col flex-wrap">
            <h1 className="flex justify-center py-4 text-2xl font-semibold">
              Total Number of employee Present today
            </h1>
            <div className="w-full pr-2">
              <CheckInEmployees />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanyDashboard;
