import React from 'react';
import { PieChart as RechartsPieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const PieChart = ({ data, colors }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
