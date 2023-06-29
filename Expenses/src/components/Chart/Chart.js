import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxmun = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxmun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
