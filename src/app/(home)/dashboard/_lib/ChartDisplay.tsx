import LineChartComponent from "@/components/ChartComponent/LineChart";
import PieChartComponent from "@/components/ChartComponent/PieChartComponent";

const ChartDisplay = () => {
  return (
    <div className="flex gap-2 mb-[60px]">
      <div className="w-[75%] flex px-10 py-8  bg-white border flex-col rounded-lg gap-3">
        <div className="p-4">
          <h2 className="text-xl font-bold">Event Information</h2>
        </div>
        <LineChartComponent />
      </div>
      <div className="border bg-white rounded-lg p-5">
        <PieChartComponent />
      </div>
    </div>
  );
};

export default ChartDisplay;
