import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './index.css';

export default function BarChart({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (data && data.length > 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const groupedData = data.reduce((acc, item) => {
        const concorrente = item.loja_concorrente;
        const preco = parseFloat(item.preco_Regular);

        if (!acc[concorrente]) {
          acc[concorrente] = {
            concorrente,
            prices: [],
          };
        }

        acc[concorrente].prices.push(preco);

        return acc;
      }, {});

      const labels = Object.keys(groupedData);
      const prices = Object.values(groupedData).map((item) => {
        const average = item.prices.reduce((sum, price) => sum + price, 0) / item.prices.length;
        return average.toFixed(2); // Arredondar a média para 2 casas decimais
      });

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Preço Médio',
              data: prices,
              backgroundColor: 'rgba(	8, 58, 192, 0.6)',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          elements: {
            bar: {
              borderWidth: 1,
              barThickness: 'flex',
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} className="grafico-area" />;
}
