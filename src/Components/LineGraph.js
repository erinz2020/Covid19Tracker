import React, {useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import numeral from "numeral";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// export const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top',
//         },
//         title: {
//             display: true,
//             text: 'Coronavirus Cases',
//         },
//     },
// };

const options = {
    legend: {
        display: false,
    },
    elements: {
        points: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0")
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines:{
                    display: false,
                },
                ticks: {
                    callback: function(value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
};

export default function LineGraph(props) {

    const [labels, setLabels] = useState([111,222,333]);
    const [data1, setData1] = useState([]);


    const getData = () => {

        const rawData = async () => {

            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
                .then(res => res.json())
                .then(data => {
                    data = data.cases;
                    let lastDate=0;
                    // console.log(data);
                    const label = [];
                    const data12 = [];

                    for(let date in data){
                        label.push(date);
                        data12.push(data[date]-lastDate);

                        lastDate=data[date];
                    }

                    setLabels(label);
                    setData1(data12);
                });

        }

        rawData();


        const data = {
            labels,
            datasets: [
                {
                    label: 'Coronavirus Cases',
                    data: data1,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },

            ],
        };

        return data;
    }

     return <Line options={options} data={getData()} />;

    // return <div>I'm a line graph</div>
}

