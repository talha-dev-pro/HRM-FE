import CompanyDashboard from "./Components/company/CompanyDashboard";
import EmployeeDashboard from "./Components/employee/EmployeeDashboard";
import EmployeeNotifications from "./Components/employee/EmployeeNotifications";
import EmployeeProfile from "./Components/employee/EmployeeProfile";

const Home = ({ header }) => {
  return (
    <>
      <div className="w-full h-full pl-24 pt-16">
        <div className="w-full h-full border-dashed border-l-2 border-t-2">
          {header == "Dashboard" && <EmployeeDashboard />}
          {header == "Notifications" && <EmployeeNotifications />}
          {header == "Profile" && <EmployeeProfile />}
        </div>
      </div>
    </>
  );
};
export default Home;
