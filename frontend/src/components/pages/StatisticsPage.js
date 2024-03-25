import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './StatisticsPage.css'; 

const StatisticsPage = () => {
  const chartRefs = useRef([]);
  const chartInstances = useRef([]);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const dataSets = {
    en: [
      {
        type: 'bar',
        labels: ['January', 'February', 'March', 'April', 'May'],
        values: [10, 20, 15, 25, 30],
        description: 'This is a bar chart showing data for the first half of the year.',
      },
      {
        type: 'line',
        labels: ['January', 'February', 'March', 'April', 'May'],
        values: [5, 15, 10, 20, 25],
        description: 'This is a line chart representing trends over the first half of the year.',
      },
      {
        type: 'pie',
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        values: [15, 25, 20, 10],
        description: 'This is a pie chart illustrating color distribution.',
      },
      {
        type: 'doughnut',
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        values: [10, 20, 15, 25],
        description: 'This is a doughnut chart showing color distribution.',
      },
    ],
    fr: [
      {
        type: 'bar',
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
        values: [10, 20, 15, 25, 30],
        description: 'Ceci est un diagramme à barres montrant les données pour le premier semestre de l\'année.',
      },
      {
        type: 'line',
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
        values: [5, 15, 10, 20, 25],
        description: 'Ceci est un graphique linéaire représentant les tendances du premier semestre de l\'année.',
      },
      {
        type: 'pie',
        labels: ['Rouge', 'Bleu', 'Jaune', 'Vert'],
        values: [15, 25, 20, 10],
        description: 'Ceci est un diagramme circulaire illustrant la répartition des couleurs.',
      },
      {
        type: 'doughnut',
        labels: ['Rouge', 'Bleu', 'Jaune', 'Vert'],
        values: [10, 20, 15, 25],
        description: 'Ceci est un graphique en anneau montrant la répartition des couleurs.',
      },
    ],
  };

  useEffect(() => {
    if (chartInstances.current.length > 0) {
      chartInstances.current.forEach(chart => chart.destroy());
      chartInstances.current = [];
    }

    dataSets[currentLanguage].forEach((data, index) => {
      const ctx = chartRefs.current[index].getContext('2d');
      const chart = new Chart(ctx, {
        type: data.type,
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Sample Data',
              data: data.values,
              backgroundColor: data.values.map(() => getRandomColor()),
              borderColor: data.type === 'line' ? 'black' : '#fff',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Value',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Month',
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
          },
        },
      });
      chartInstances.current.push(chart);
    });
  }, [currentLanguage]);

  const getRandomColor = () => {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
  };
  const handlePrint = () => {
    window.print();};
  const handleLanguageToggle = () => {
    setCurrentLanguage(prevLanguage => (prevLanguage === 'en' ? 'fr' : 'en'));
    
  };

  return (
    <div className="container">
      <div className="page-bar">
        <h1 className="text-3xl font-bold text-white">Statistics Page</h1>
        <div className="actions">
          <button onClick={handleLanguageToggle} className="language-toggle">
            {currentLanguage === 'en' ? 'Fr' : 'En'}
          </button>
          <button onClick={handlePrint} className="print-button">
            Print
          </button>
        </div>
      </div>
      <div className="chart-container">
        {dataSets[currentLanguage].map((data, index) => (
          <div key={index} className="chart-item">
            <canvas ref={ref => (chartRefs.current[index] = ref)} width="200" height="150" />
            <p className="chart-description">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsPage;
