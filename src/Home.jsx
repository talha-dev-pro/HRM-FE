import CompanyDashboard from "./Components/company/CompanyDashboard";
import CompanyNotification from "./Components/company/CompanyNotification";
import EmployeeDashboard from "./Components/employee/EmployeeDashboard";
import EmployeeNotifications from "./Components/employee/EmployeeNotifications";
import EmployeeProfile from "./Components/employee/EmployeeProfile";

const Home = ({ header }) => {
  return (
    <>
      <div className="w-full h-full pl-24 pt-16">
        <div className="w-full h-full border-dashed border-l-2 border-t-2">
          {header == "Dashboard" && <CompanyDashboard />}
          {header == "Notifications" && <CompanyNotification />}
          {header == "Profile" && <CompanyProfile />}
        </div>
      </div>
    </>
  );
};
export default Home;
