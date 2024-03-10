import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Rectangle,
} from "recharts";


import CustomTooltip from "./CustomTooltip";
function LogChart({data, XAxisKey, barKey}) {
 
  return (
    <div className="h-96 max-w-screen-sm w-screen ">
      <ResponsiveContainer>
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" strokeLinecap="butt" />
          <XAxis dataKey={XAxisKey} />
          <YAxis padding={{ top:60}}/>
          <Tooltip
          content={<CustomTooltip />}
            contentStyle={{ backgroundColor: "#27272a" }}
            itemStyle={{ color: "#eee" }}
          />

          <Bar
            dataKey={barKey}
            itemStyle={{ borderRadius: "20px" }}
            fill="#113366"
            activeBar={<Rectangle fill="#27272a" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LogChart;
