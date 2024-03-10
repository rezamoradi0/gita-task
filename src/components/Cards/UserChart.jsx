import LogChart from "../Chart/LogChart";

function UserChart({ data }) {
  const {chartData}=data;
  return <LogChart data={chartData.data} XAxisKey={chartData.XAxisKey} barKey={chartData.barKey}/>;
}

export default UserChart;
