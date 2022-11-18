import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { ThemeProvider } from '@emotion/react'
import theme from '../mui-theme'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor, store} from '../store/store'



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
           <Layout>
             <Component {...pageProps} />
           </Layout>
           </ThemeProvider>
         </PersistGate>
    </Provider>
  )
}
