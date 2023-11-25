import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TopSpendingBarChart = ({ data, colors }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        {colors.map((color, index) => (
          <Bar key={`bar-${index}`} dataKey="amount" fill={color} />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default TopSpendingBarChart;
