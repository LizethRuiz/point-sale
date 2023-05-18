import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Link } from 'react-router-dom';
import CatalogTitle from './CatalogTitle';
import Chatbot from './Chatbot'; 

const chatContainerStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '300px',
  height: '400px',
  borderRadius: '8px',
  backgroundColor: '#f4f4f4',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};

const inputContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  padding: '8px',
};

// Estilos personalizados para el input
const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '20px',
};

const Home = () => {
    const salesChartRef = useRef(null);
    const customersChartRef = useRef(null);

    useEffect(() => {
      // Datos ficticios para las gráficas (puedes reemplazarlos con tus propios datos)
      const salesData = [100, 150, 200, 120, 180];
      const customersData = [10, 15, 20, 12, 18];
  
      // Configuración de la gráfica de ventas
      const salesChartConfig = {
        type: 'line',
        data: {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
          datasets: [
            {
              label: 'Ventas',
              data: salesData,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#C4C6C7',
                        font: {
                            size: 14, // Tamaño de la fuente para los valores del eje Y
                            
                        },
                    },
                },
                x: {
                    ticks: {
                        color: '#C4C6C7',
                        font: {
                            size: 14, // Tamaño de la fuente para las etiquetas del eje X
                        },
                    },
                },
            },
        },
      };
  
      // Configuración de la gráfica de clientes
      const customersChartConfig = {
        type: 'bar',
        data: {
          labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
          datasets: [
            {
              label: 'Clientes',
              data: customersData,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          indexAxis: 'y',
          scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#C4C6C7',
                    font: {
                        size: 14, // Tamaño de la fuente para los valores del eje Y
                        
                    },
                },
            },
            x: {
                ticks: {
                    color: '#C4C6C7',
                    font: {
                        size: 14, // Tamaño de la fuente para las etiquetas del eje X
                    },
                },
            },
        },
        },
      };
  
      // Renderizar las gráficas
      const salesChart = new Chart(salesChartRef.current, salesChartConfig);
      const customersChart = new Chart(customersChartRef.current, customersChartConfig);
  
      // Limpiar las gráficas al desmontar el componente
      return () => {
        salesChart.destroy();
        customersChart.destroy();
      };
    }, []);
  
    return (
        <div className="bg-gray-900">
            <div>
                <CatalogTitle title="Easy CRM" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 shadow-lg">
                    <canvas ref={salesChartRef} />
                </div>
                <div className="bg-gray-800 p-4 shadow-lg">
                    <canvas ref={customersChartRef} />
                </div>
            </div>
            <div>
              <Chatbot/>
            </div>
        </div>
    );
  };
  
  export default Home;
  
  