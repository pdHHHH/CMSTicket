import React from 'react';
import './Graph.scss';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

const Graph: React.FC<{ height?: number }> = ({ height = 320 }) => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
    const data = {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
        drawActiveElementsOnTop: false,
        datasets: [
            {
                label: '',
                data: [140, 180, 150, 220, 250, 210, 180],
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(255, 138, 72, .2)',
                borderColor: '#FF993B',
                borderWidth: 3,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        maintainAspectRatio: false,
        scales: {
                x: {
                    grid: {
                        color: "rgba(0,0,0,0)"
                    }
                },
                y: {
                    grid: {
                        color: "rgba(0,0,0,0.1)"
                    }
                },
            },
    };
    return (
        <div className="graph">
            <Line data={data} options={options} height={`${height}px`} width="100%" />
        </div>
    );
};

export default Graph;
