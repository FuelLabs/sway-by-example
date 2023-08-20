import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useAppContext } from "./contexts/AppContext"
import styles from "./App.module.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import routes from "./routes"
import { getPrevNextPaths } from "./pages/index"
import { Analytics } from "@vercel/analytics/react"

function App() {
  const { state, loadLocalStorage } = useAppContext()

  useEffect(() => {
    loadLocalStorage()
  }, [])

  if (state.loading) {
    return null
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.component}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>
          <Routes>
            {routes.map((route) => {
              const { prev, next } = getPrevNextPaths(route.path)
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component({ prev, next })}
                />
              )
            })}
          </Routes>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
      <Analytics />
    </Router>
  )
}

export default App
