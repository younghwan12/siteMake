import { Chart } from 'primereact/chart';
import React, { useContext, useEffect, useState } from 'react';
import { Panel } from 'primereact/panel';
import { LayoutContext } from '@/layout/context/layoutcontext';

const BoardThree = () => {
    //pieData
    const { layoutConfig } = useContext(LayoutContext);
    const [options, setOptions] = useState({});
    const [data, setChartData] = useState({});


    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--teal-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--indigo-400'), documentStyle.getPropertyValue('--purple-400'), documentStyle.getPropertyValue('--teal-400')]
                }
            ]
        };
        const pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };

        setOptions({
            pieOptions,
        });
        setChartData({
            pieData,
        });

    }, [layoutConfig])

    return (
        <div className="col-12">
            <Panel header=" 요구사항(415건) / 일정(174건) / 운영전환(2건)" toggleable collapsed>
                <h5 className='blind'>요구사항 / 일정 / 운영전환</h5>
                <div className="flex card">
                    <div className="flex-1 flex align-items-center justify-content-center">
                        <Chart type="doughnut" data={data.pieData} options={options.pieOptions}></Chart>
                    </div>
                    <div className="flex-1 flex align-items-center justify-content-center">
                        <Chart type="doughnut" data={data.pieData} options={options.pieOptions}></Chart>
                    </div>
                    <div className="flex-1 flex align-items-center justify-content-center">
                        <Chart type="doughnut" data={data.pieData} options={options.pieOptions}></Chart>
                    </div>
                </div>
            </Panel>
        </div>
    )
}
export default BoardThree