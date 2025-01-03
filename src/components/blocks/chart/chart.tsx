'use client'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { name: "11/11", name2: 400, uv: 50, pv: 350, amt: 180 },
  { name: '11/12', name2: 300, uv: 100, pv: 340, amt: 160 },
  { name: '11/13', name2: 200, uv: 200, pv: 290, amt: 130 },
  { name: '11/14', name2: 100, uv: 250, pv: 270, amt: 160 },
  { name: '11/15', uv: 260, pv: 210, amt: 190},
  { name: '11/16', uv: 235, pv: 80,amt:320 },
];

export default class Chart extends PureComponent {
  render() {
    return (
     
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
          
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />

            <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={15} />
            <YAxis
              dataKey="name2"
              axisLine={false}
              tickLine={false}
              tickMargin={20}
            />

            
            <Line
              type="linear"
              dataKey="pv"
              stroke="#298C10"
              dot={false}
              strokeWidth={2}
            />
            <Line
              type="linear"
              dataKey="uv"
              stroke="#0EE5F2"
              dot={false}
              strokeWidth={2}
            />
            <Line
              type="linear"
              dataKey="amt"
              stroke="#FF0000"
              dot={false}
              strokeWidth={2}
            />

           
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
     
    );
  }
}
