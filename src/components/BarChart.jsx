import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChart = ({ data, colors }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {colors.map((color, index) => (
          <Bar key={index} dataKey={`value${index + 1}`} fill={color} />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
