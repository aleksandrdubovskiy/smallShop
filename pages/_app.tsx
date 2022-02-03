import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {setupStore} from "../app/store/store";
import {Provider} from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
    const store = setupStore();
  return (
      <Provider store={store}>
          <div className='py-7 px-5'>
              <Component {...pageProps} />
          </div>
      </Provider>
  )
}

export default MyApp