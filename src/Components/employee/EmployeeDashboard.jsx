import EmployeeAttendance from "./EmployeeAttendance";
import EmployeeCheckInGraph from "./EmployeeCheckInGraph";
import EmployeeClock from "./EmployeeClock";

const EmployeeDashboard = () => {
  return (
    <>
      <div className="w-full h-full px-4 pt-2 flex justify-center items-center">
        <div className="w-full h-full bg-white flex flex-wrap rounded-md py-4">
          <div className="w-full h-1/6 flex flex-row flex-wrap justify-center items-center">
            <EmployeeAttendance />
          </div>
          <div className="w-full h-2/6 flex flex-row flex-wrap">
            <EmployeeCheckInGraph />
          </div>
          <div className="w-full h-1/6 flex flex-row flex-wrap pt-6">
            <EmployeeClock />
          </div>
        </div>
      </div>
    </>
  );
};
export default EmployeeDashboard;
