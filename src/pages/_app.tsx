import type { AppContext, AppProps } from 'next/app'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import 'primereact/resources/primereact.css';
import 'antd/dist/antd'
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
import Head from 'next/head'
import { store } from "../redux/store"
import koKR from "antd/lib/locale/ko_KR"
import { parseCookies } from '../libs/cookie'

//layout
import { LayoutProvider } from '../layout/context/layoutcontext';
import Layout from '../layout/layout';

// type
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

// start npx json-server --watch c:\json-server\db.json --port 4000 -H 172.20.10.2


interface InitialProps {
  cookies: unknown;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


// require("../mocks")

const App = ({ Component, pageProps }: AppPropsWithLayout) => {

  const getLayout = Component.getLayout ?? (page => page);

  if (Component.getLayout) {
    return (
      <Provider store={store}>
        <ConfigProvider locale={koKR}>
          <LayoutProvider>
            {Component.getLayout(<Component {...pageProps} />)}
          </LayoutProvider>
        </ConfigProvider>
      </Provider>
    )
  } else {
    return (
      <Provider store={store}>
        <ConfigProvider locale={koKR}>
          <LayoutProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LayoutProvider>
        </ConfigProvider>
      </Provider>
    );
  }


}

App.getInitialProps = async (context: AppContext) => {
  return {
    cookies: parseCookies(context?.ctx?.req)
  }
}

export default App;