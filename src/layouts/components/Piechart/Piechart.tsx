import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import "./Piechart.scss"

const Piechart: React.FC<{ size?: number, label?: string}> = ({ size = 240, label }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['Vé đã sử dụng', 'Vé chưa sử dụng'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [13568, 56024],
                backgroundColor: ['#FF993B', '#27AEF9'],
                hoverOffset: 4,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        maintainAspectRatio: true,
    };
    return (
        <div className="piechart" style={{ height: `${size}px`, width: `${size}px` }}>
            <div className="piechart__label">{label}</div>
            <Doughnut data={data} options={options} className="piechart__chart" />
        </div>
    );
};

export default Piechart;
