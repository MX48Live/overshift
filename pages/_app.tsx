import type { AppProps } from 'next/app'
import 'reset-css'
import '../styles/MainTable.scss'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
