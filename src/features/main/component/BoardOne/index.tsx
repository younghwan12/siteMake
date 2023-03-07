import { Chart } from 'primereact/chart';
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from '@/common/components';
import { Panel } from 'primereact/panel';
const dummydata = [
    {
        title: "[교육자료] PIMS 교육자료",
    },
    {
        title: "[자료] 자료",
    },
    {
        title: "[KB] 자료",
    },
    {
        title: "[자료] 오픈소스 유지보수",
    },
    {
        title: "[자료] DevOps 자동화 관련자료",
    },
]

const BoardOne = () => {

    const [products, setProducts] = useState(dummydata);

    // Line
    const [basicData] = useState({
        labels: ['55주', '56주', '57주', '58주', '59주', '60주', '61주', '현재'],
        datasets: [
            {
                label: '계획진척률',
                data: [65.23, 65.23, 65.23, 65.23, 65.23, 65.23, 65.23, 65.23],
                fill: false,
                borderColor: '#4CCF26',
                tension: .4
            },
            {
                label: '실제진척률',
                data: [37.97, 37.97, 37.97, 37.97, 37.97, 37.97, 37.97, 37.97],
                fill: false,
                borderColor: '#05A7E1',
                tension: .4
            }
        ]
    });
    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };
        let multiAxisOptions = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: .6,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: '#ebedef'
                    }
                }
            }
        };

        return {
            basicOptions,
            multiAxisOptions
        }
    }
    const { basicOptions, multiAxisOptions } = getLightTheme();


    return (
        <div className="col-12">
            <Panel header="공지사항 및 진척현황" toggleable>
                <div className='grid'>
                    <div className="grid col-12 xl:col-6">
                        <div className="col-12 xl:col-6">
                            <div className="card">
                                <h5 className='blind'>공지사항</h5>
                                <DataTable
                                    value={products}
                                    size={'small'}
                                >
                                    <Column header="공지사항" field="title" />
                                </DataTable>
                            </div>
                        </div>
                        <div className="col-12 xl:col-6">
                            <div className="card">
                                <h5 className='blind'>프로젝트 일정관리</h5>
                                <DataTable
                                    value={products}
                                    size={'small'}
                                >
                                    <Column header="프로젝트 일정관리" field="title" />
                                </DataTable>
                            </div>
                        </div>
                        <div className="col-12 xl:col-6">
                            <div className="card">
                                <h5 className='blind'>기술지원 게시판</h5>
                                <DataTable
                                    value={products}
                                    size={'small'}
                                >
                                    <Column header="기술지원 게시판" field="title" />
                                </DataTable>
                            </div>
                        </div>
                        <div className="col-12 xl:col-6">
                            <div className="card">
                                <h5 className='blind'>Q&A 게시판</h5>
                                <DataTable
                                    value={products}
                                    size={'small'}
                                >
                                    <Column header="Q&A 게시판" field="title" />
                                </DataTable>
                            </div>
                        </div>
                    </div>
                    {/* 진척현황 */}
                    <div className='col-12 xl:col-6'>
                        <div className="card">
                            <h5 className='blind'>진척현황</h5>
                            <Chart type="line" data={basicData} options={basicOptions} />
                        </div>
                    </div>
                </div>
            </Panel>
        </div>
    )
}
export default BoardOne