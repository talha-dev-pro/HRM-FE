import React, { useState } from "react";

const EmployeeAttendance = () => {
  const [shifts, setShifts] = useState(7);
  const [expectedMinutes, setExpectedMinutes] = useState(3780);
  const [workedMinutes, setWorkedMinutes] = useState(2558);
  const [shortMinutes, setShortMinutes] = useState(1222);
  const [leaves, setLeaves] = useState(0);

  return (
    <div className="bg-purple-100 rounded-lg shadow-md p-2 w-full">
      <h2 className="text-xl font-bold mb-2">Attendance Summary</h2>
      <div className="grid grid-cols-5 gap-4">
        <div className="bg-green-100 rounded-lg p-2 text-center">
          <h3 className="text-lg font-semibold">Shifts</h3>
          <p className="text-2xl font-bold">{shifts}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-2 text-center">
          <h3 className="text-lg font-semibold">Expected Minutes</h3>
          <p className="text-2xl font-bold">{expectedMinutes}</p>
        </div>
        <div className="bg-yellow-100 rounded-lg p-2 text-center">
          <h3 className="text-lg font-semibold">Worked Minutes</h3>
          <p className="text-2xl font-bold">{workedMinutes}</p>
        </div>
        <div className="bg-cyan-100 rounded-lg p-2 text-center">
          <h3 className="text-lg font-semibold">Short Minutes</h3>
          <p className="text-2xl font-bold">{shortMinutes}</p>
        </div>
        <div className="bg-red-100 rounded-lg p-2 text-center">
          <h3 className="text-lg font-semibold">Leaves</h3>
          <p className="text-2xl font-bold">{leaves}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendance;
