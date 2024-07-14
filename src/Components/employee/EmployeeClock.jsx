import React, { useState } from "react";

const EmployeeClock = () => {
  const [clockInTime, setClockInTime] = useState("09:54 AM");
  const [clockOutTime, setClockOutTime] = useState("00:56:50");
  const [expectedClockIn, setExpectedClockIn] = useState("10:00 AM");
  const [expectedClockOut, setExpectedClockOut] = useState("07:00 PM");

  return (
    <div className="bg-purple-100 rounded-lg shadow-md p-2 w-full">
      <h2 className="text-xl font-bold mb-2">Mark Clock In/Clock Out</h2>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-lg font-semibold">{clockInTime}</p>
          <span className="text-gray-500">Exp: {expectedClockIn}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-lg font-semibold">{clockOutTime}</p>
          <span className="text-gray-500">Exp: {expectedClockOut}</span>
        </div>
      </div>
      <div className="flex justify-center mt-2 gap-6">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
          Mark Check In
        </button>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
          Mark Check Out
        </button>
      </div>
    </div>
  );
};

export default EmployeeClock;
