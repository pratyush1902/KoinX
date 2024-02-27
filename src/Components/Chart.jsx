import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const Charts = () => {
  const [chartData, setChartData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7'
        );
        setChartData(response.data.prices);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {
      renderChart();
    }
  }, [chartData]);

  const renderChart = () => {
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    const labels = chartData.map(data => new Date(data[0]).toLocaleDateString());
    const prices = chartData.map(data => data[1]);

    const ctx = document.getElementById('bitcoinChart');

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Bitcoin Price (USD)',
            data: prices,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  };

  return (
    <div>
       
      <canvas id="bitcoinChart" width="400" height="200"></canvas>
    </div>
  );
};

export default  Charts;
