import React, { useEffect, useState } from "react";


const options = {
    // legend: {
    //     display: false,
    // },
    // elements: {
    //     point: {
    //         radius: 0,
    //     },
    // },
    // maintainAspectRatio: false,
    // tooltips: {
    //     mode: "index",
    //     intersect: false,
    //     callbacks: {
    //         label: function (tooltipItem, data) {
    //             return numeral(tooltipItem.value).format("+0,0");
    //         },
    //     },
    // },
};

function LineGraph({ caseType }) {
    const [data, setData] = useState({});

    const buildChartData = (data, caseTypes = "cases") => {
        const chartData = [];
        let lastDataPoint;

        for (let date in data[caseTypes]) {
            if (lastDataPoint) {
                let newDataPoint = {
                    x: date,
                    y: data[caseTypes][date] - lastDataPoint,
                };
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[caseTypes][date];
        }
        return chartData;
    };

    useEffect(() => {
        const getGraphData = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
                .then((response) => response.json())
                .then((data) => {
                    const chartData = buildChartData(data, caseType);
                    setData(chartData);
                });
        }
        getGraphData();
    }, [caseType]);

    return (
        <div>
            {/* {data?.length > 0 && (
                <Line
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204, 16, 52, 0.5)",
                                borderColor: "#CC1034",
                                data: data,
                            },
                        ],
                    }}
                    options={options}
                />
            )} */}
        </div>
    );
}

export default LineGraph;
