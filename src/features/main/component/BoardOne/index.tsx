import { Chart } from 'primereact/chart';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from '@/common/components';
import { Panel } from 'primereact/panel';
import { useGetboardListQuery } from '@/features/board/redux';
import { useGetqnaListQuery } from '@/features/qna/redux/qnaApi';

const BoardOne = () => {


    const { data: qnaList } = useGetqnaListQuery();

    const { data: boardList } = useGetboardListQuery();

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
        <div className="mb-2">
            <Panel header={`공지사항 및 진척현황 / 공지사항: ${qnaList?.length} 건 / 프로젝트 일정관리: ${qnaList?.length} 건 / 기술지원게시판: ${qnaList?.length} 건 / Q&A 게시판 : ${boardList?.length} 건 `} toggleable>
                <div className='grid'>
                    <div className="grid col-12 xl:col-6">
                        <div className="col-12 xl:col-6">
                            <div className="card">
                                <h5 className='blind'>공지사항</h5>
                                <DataTable
                                    value={qnaList}
                                    size={'small'}
                                    paginator rows={5}
                                >
                                    <Column header="공지사항" field="title" />
                                </DataTable>
                            </div>
                        </div>
                        <div className="col-12 xl:col-6">
                            <div className="card">
                                <h5 className='blind'>프로젝트 일정관리</h5>
                                <DataTable
                                    value={qnaList}
                                    size={'small'}
                                    paginator rows={5}
                                >
                                    <Column header="프로젝트 일정관리" field="title" />
                                </DataTable>
                            </div>
                        </div>
                        <div className="col-12 xl:col-6">
                            <div className="card">
                                <h5 className='blind'>기술지원 게시판</h5>
                                <DataTable
                                    value={qnaList}
                                    size={'small'}
                                    paginator rows={5}
                                >
                                    <Column header="기술지원 게시판" field="title" />
                                </DataTable>
                            </div>
                        </div>
                        <div className="col-12 xl:col-6">
                            <div className="card">
                                <h5 className='blind'>Q&A 게시판</h5>
                                <DataTable
                                    size={'small'}
                                    value={boardList}
                                    paginator rows={5}
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