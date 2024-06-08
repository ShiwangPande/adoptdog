// src/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const data = {
    labels: [
      'Aggression (Animal)',
      'Aggression (People)',
      'Bite Case',
      'Failed CBA',
      'Feral',
      'Food Aggression',
      'Heart Worm Positive',
      'Hit by Vehicle',
      'Kennel Stress',
      'Owner Requested',
      'Policy',
      'Sick',
      'Skin Conditions/Mange'
    ],
    datasets: [
      {
        label: 'Euthanasia Totals',
        data: [25, 120, 2, 13, 35, 6, 4, 34, 29, 11, 251, 260, 45],
        backgroundColor: [
          '#FFD700', '#ADD8E6', '#FF4500', '#90EE90', '#9400D3', '#FFA500', '#00CED1', '#DC143C', '#008000', '#FF00FF', '#FFFFE0', '#E0FFFF', '#FA8072'
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Euthanasia Totals by Date',
      },
    },
  };

  return (
    <div className="w-full lg:max-w-3xl max-w-sm mx-auto">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
