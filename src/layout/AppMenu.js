import getConfig from 'next/config';
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const model = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        //내작업
        /* {
            // label: 'My Work',
            items: [
                {
                    label: '내 작업',
                    icon: 'pi pi-fw pi-folder',
                    to: '/mywork',
                    items: [
                        {
                            label: '일정 실적 입력',
                            icon: 'pi pi-fw pi-server',
                            to: '/skedperf',
                        },
                        {
                            label: '관리자',
                            icon: 'pi pi-fw pi-cog',
                            to: '/admin',
                            items: [
                                {
                                    label: '승인처리',
                                    icon: 'pi pi-fw pi-check-circle',
                                    to: '/skedperf',
                                },
                                {
                                    label: '일정실적(관리자)',
                                    icon: 'pi pi-fw pi-eye',
                                    to: '/skedperf',
                                },
                                {
                                    label: '보낸 알림함',
                                    icon: 'pi pi-fw pi-send',
                                    to: '/skedperf',
                                },
                                {
                                    label: '받은 알림함',
                                    icon: 'pi pi-fw pi-comment',
                                    to: '/skedperf',
                                }
                            ]
                        },
                        { label: '회의실 예약', icon: 'pi pi-fw pi-user-minus', to: '/mtreserve' }
                    ]
                },
            ]
        },
        //일정관리
        {
            // label: 'SKED Mgmt',
            items: [
                {
                    label: '일정관리',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/skedmgmt',
                    items: [
                        {
                            label: '방법론 테일러링',
                            icon: 'pi pi-fw pi-calendar',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정계획',
                            icon: 'pi pi-fw pi-calendar',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정관리',
                            icon: 'pi pi-fw pi-calendar',
                            to: '/skedmgmt',
                        },
                        {
                            label: '진척관리',
                            icon: 'pi pi-fw pi-calendar',
                            to: '/skedmgmt',
                        }
                    ]
                }]
        },
        //공정상세관리
        {
            // label: 'SKED Mgmt',
            items: [
                {
                    label: '공정상세관리',
                    icon: 'pi pi-fw pi-chart-pie',
                    to: '/skedmgmt',
                    items: [
                        {
                            label: '방법론 테일러링',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정계획',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '진척관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        }
                    ]
                }]
        },
        //품질관리
        {
            // label: 'SKED Mgmt',
            items: [
                {
                    label: '품질관리',
                    icon: 'pi pi-fw pi-check-circle',
                    to: '/skedmgmt',
                    items: [
                        {
                            label: '방법론 테일러링',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정계획',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '진척관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        }
                    ]
                }]
        },
        //성과관리
        {
            // label: 'SKED Mgmt',
            items: [
                {
                    label: '성과관리',
                    icon: 'pi pi-fw pi-power-off',
                    to: '/skedmgmt',
                    items: [
                        {
                            label: '방법론 테일러링',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정계획',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '진척관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        }
                    ]
                }]
        },
        //Issue/Risk/변경
        {
            // label: 'SKED Mgmt',
            items: [
                {
                    label: 'Issue/Risk/변경',
                    icon: 'pi pi-fw pi-replay',
                    to: '/skedmgmt',
                    items: [
                        {
                            label: '방법론 테일러링',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정계획',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '진척관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        }
                    ]
                }]
        },
        //팀사이트
        {
            // label: 'SKED Mgmt',
            items: [
                {
                    label: '팀사이트',
                    icon: 'pi pi-fw pi-sitemap',
                    to: '/skedmgmt',
                    items: [
                        {
                            label: '방법론 테일러링',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정계획',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '진척관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        }
                    ]
                }]
        },
        //기본정보
        {
            // label: 'SKED Mgmt',
            items: [
                {
                    label: '기본정보',
                    icon: 'pi pi-fw pi-box',
                    to: '/skedmgmt',
                    items: [
                        {
                            label: '방법론 테일러링',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정계획',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '진척관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        }
                    ]
                }]
        },
        //환경설정
        {
            // label: 'SKED Mgmt',
            items: [
                {
                    label: '환경설정',
                    icon: 'pi pi-fw pi-cog',
                    to: '/skedmgmt',
                    items: [
                        {
                            label: '방법론 테일러링',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정계획',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '일정관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        },
                        {
                            label: '진척관리',
                            icon: 'pi pi-fw pi-pencil',
                            to: '/skedmgmt',
                        }
                    ]
                }]
        },
        */
        {
            label: 'API TEST',
            items: [
                { label: 'Board', icon: 'pi pi-fw pi-id-card', to: '/board' },
                { label: '탐색기', icon: 'pi pi-fw pi-file-excel', to: '/explorer' },
                { label: 'flowchart', icon: 'pi pi-fw pi-circle-off', to: '/flowchart' },
            ]
        },
        {
            label: 'Pages',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [
                {
                    label: 'Auth',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'Login',
                            icon: 'pi pi-fw pi-sign-in',
                            to: '/auth/login'
                        },
                        {
                            label: 'Error',
                            icon: 'pi pi-fw pi-times-circle',
                            to: '/auth/error'
                        },
                        {
                            label: 'Access Denied',
                            icon: 'pi pi-fw pi-lock',
                            to: '/auth/access'
                        }
                    ]
                },
                {
                    label: 'Not Found',
                    icon: 'pi pi-fw pi-exclamation-circle',
                    to: '/pages/notfound'
                },
                {
                    label: 'Empty',
                    icon: 'pi pi-fw pi-circle-off',
                    to: '/pages/empty'
                }
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
