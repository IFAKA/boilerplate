import { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { SWRConfig } from 'swr'
import { Spinner } from './components'
import { Provider } from './context'
import { Home } from './pages'
import { fetcher } from './services'
import { RoutesWithNotFound } from './utils'

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Provider>
        <SWRConfig value={{ fetcher }}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path="/" element={<Home />} />
            </RoutesWithNotFound>
          </BrowserRouter>
        </SWRConfig>
      </Provider>
    </Suspense>
  )
}

export default App