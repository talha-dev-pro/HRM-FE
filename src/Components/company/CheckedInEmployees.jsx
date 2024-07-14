import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CheckInEmployees = () => {
  const [data, setData] = useState([
    { date: "10 Jun", checkIn: 1 },
    { date: "11 Jun", checkIn: 2 },
    { date: "12 Jun", checkIn: 3 },
    { date: "13 Jun", checkIn: 5 },
    { date: "14 Jun", checkIn: 8 },
    { date: "20 Jun", checkIn: 6 },
    { date: "21 Jun", checkIn: 2 },
    { date: "24 Jun", checkIn: 7 },
    { date: "25 Jun", checkIn: 4 },
    { date: "26 Jun", checkIn: 5 },
    { date: "27 Jun", checkIn: 9 },
    { date: "28 Jun", checkIn: 6 },
    { date: "01 Jul", checkIn: 8 },
    { date: "02 Jul", checkIn: 5 },
    { date: "03 Jul", checkIn: 4 },
    { date: "04 Jul", checkIn: 7 },
    { date: "08 Jul", checkIn: 10 },
    { date: "09 Jul", checkIn: 1 },
  ]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Employee Check In Trends</h2>
      <LineChart width={800} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="checkIn" stroke="#ff7300" />
      </LineChart>
    </div>
  );
};

export default CheckInEmployees;
