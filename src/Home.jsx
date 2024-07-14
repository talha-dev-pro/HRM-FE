import Dashboard from "./Components/employee/Dashboard";
import Notifications from "./Components/employee/Notifications";
import Profile from "./Components/employee/Profile";

const Home = ({ header }) => {
  return (
    <>
      <div className="w-full h-full pl-24 pt-16">
        <div className="w-full h-full border-dashed border-l border-t">
          {header == "Dashboard" && <Dashboard />}
          {header == "Notifications" && <Notifications />}
          {header == "Profile" && <Profile />}
        </div>
      </div>
    </>
  );
};
export default Home;
