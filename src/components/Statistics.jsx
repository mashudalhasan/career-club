import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const data01 = [
  { name: "Assignment 1", value: 60, color: "#FF8042" },
  { name: "Assignment 2", value: 58, color: "#0088FE" },
  { name: "Assignment 3", value: 50, color: "#FFBB28" },
  { name: "Assignment 4", value: 60, color: "#00C49F" },
  { name: "Assignment 5", value: 60, color: "#FF7373" },
  { name: "Assignment 6", value: 59, color: "#A97FFF" },
  { name: "Assignment 7", value: 60, color: "#FFC107" },
  { name: "Assignment 8", value: 60, color: "#8884d8" },
];

const Statistics = () => {
  return (
    <div className="my-container mt-7 mb-32">
      <p className="text-2xl font-bold text-center">Assignment Marks</p>
      <p className='text-gray-500 text-center mt-4'>Analyzing assignment marks is a key tool for understanding student performance and progress. This would give an overall idea about the past performance.</p>
      <div className="flex justify-center items-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data01}
            dataKey="value"
            cx={200}
            cy={200}
            outerRadius={100}
            fill="#9873FF"
            label
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
