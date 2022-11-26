import { Suspense } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { SWRConfig } from "swr"
import { Layout, Spinner } from "./components"
import { ServiceWorkerModal } from "./config"
import { Provider } from "./context"
import { Home } from "./pages"
import { fetcher } from "./services"
import { RoutesWithNotFound } from "./utils"

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <ServiceWorkerModal />
      <Provider>
        <SWRConfig value={{ fetcher }}>
          <BrowserRouter>
            <Layout>
              <RoutesWithNotFound>
                <Route path="/" element={<Home />} />
              </RoutesWithNotFound>
            </Layout>
          </BrowserRouter>
        </SWRConfig>
      </Provider>
    </Suspense>
  )
}

export default App
