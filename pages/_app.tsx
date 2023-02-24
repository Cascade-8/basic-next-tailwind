import '@styles/globals.css'
import type { AppProps } from 'next/app'
import withData from '@hocs/withData'
const App = ({ Component, pageProps }: AppProps) => {
  const DataComponent = withData(Component)
  return <DataComponent {...pageProps} />
}
export default App