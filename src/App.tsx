import { Outlet } from "react-router-dom"
import './global/global.scss'
import Header from "./components/layout/header/app.header"
import Footer from "./components/layout/footer/app.footer"

function App() {

  return (
    <div className="layout-page">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
