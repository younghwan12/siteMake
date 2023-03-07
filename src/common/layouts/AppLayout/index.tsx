
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import AsideMenu from './AsideMenu'
import Header from '../AppLayout/Header'


import Head from 'next/head'

interface ILayoutProps {
    children?: React.ReactNode;
    pageName?: string;
    pageNav?: string;
    title?: string;
    type?: "main";
    headerTabs?: boolean;
    headerSteps?: boolean;
}

const AppLayout = ({ title, ...props }: ILayoutProps) => {

    // const menuCollapsed = useAppSelector((state) => state.main.menuCollapsed)
    return (
        <div className="iq-wrap">
            <Head>{title && <title>{title}</title>}</Head>
            {props.type === "main" ? (
                <div className="iq-main">
                    <div className="iq-content mainpage">{props.children}</div>
                </div>
            ) : (
                <div
                    className={`iq-main ${props.headerTabs !== undefined && props.headerTabs == true
                        ? `header-has-tabs`
                        : ""
                        }`}
                >
                    <div className="iq-content">
                        <main className="iq-content-main">{props.children}</main>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AppLayout;