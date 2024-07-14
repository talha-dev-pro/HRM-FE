import logo from "../../../../media/Logo PNG/main-w.png";
import dash from "../../../../media/menu_3388694.png";
import profile from "../../../../media/user.png";
import notification from "../../../../media/active.png";

const Header = ({ setHeader }) => {
  return (
    <>
      <div className="flex h-16 w-full bg-white absolute items-center justify-between">
        <div className="flex items-center w-24 h-full bg-white absolute left-0 border-dashed border-r-2">
          <img src={logo} className="h-20 w-full object-contain" alt="logo" />
        </div>
        <div className="flex flex-col items-center w-24 bg-white absolute top-16 left-0">
          <button
            className="w-14 h-16 object-contain mt-10 pr-2 hover:text-purple-600 cursor-pointer"
            onClick={() => {
              setHeader("Dashboard");
            }}
          >
            <img src={dash} className="pl-4" alt="menu" />
            <span className="text-sm pr-4">Dashboard</span>
          </button>
        </div>
        <div className="flex justify-end items-center w-full h-full pr-6">
          <img
            src={notification}
            className="mr-6 object-contain h-8 cursor-pointer"
            alt="notification"
            onClick={() => {
              setHeader("Notifications");
            }}
          />
          <img
            src={profile}
            className="mr-6 object-contain h-10 cursor-pointer"
            alt="profile"
            onClick={() => {
              setHeader("Profile");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
