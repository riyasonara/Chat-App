/* eslint-disable react/prop-types */
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { LightPurple, blue, lightBlue, purple } from "../../constants/Color";
import { getLast7Days } from "../../lib/features";

ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const labels = getLast7Days();

const LineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      //   {
      //     data: [1, 2, 34],
      //     label: "My First dataset",
      //     borderColor: "rgba(75, 192, 192, 1)",
      //     backgroundColor: "rgba(75, 192, 192, 0.2)",
      //     fill: false,
      //   },
      {
        data: value,
        label: "My Second dataset",
        backgroundColor: LightPurple,
        borderColor: purple,
        fill: true,
      },
    ],
  };
  return <Line data={data} options={LineChartOptions} />;
};

const DoughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 120,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      //   {
      //     data: [1, 2, 34],
      //     label: "My First dataset",
      //     borderColor: "rgba(75, 192, 192, 1)",
      //     backgroundColor: "rgba(75, 192, 192, 0.2)",
      //     fill: false,
      //   },
      {
        data: value,
        label: "Total Chats vs Group Chats",
        backgroundColor: [LightPurple, blue],
        borderColor: [purple, blue],
        hoverBackgroundColor: [purple, blue],
        fill: true,
        offset:30
      },
    ],
  };
  return <Doughnut style={{zIndex:10}} data={data} options={DoughnutChartOptions} />;
};

export { DoughnutChart, LineChart };
