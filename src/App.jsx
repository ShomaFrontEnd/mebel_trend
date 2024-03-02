import { Outlet } from "react-router-dom"
import './index.css'
import NavBar from "./app/components/navigation/navBar"
import Footer from "./app/components/footer/footer"


function App() {

 return (<>
    <header>
      <NavBar />
    </header>
    <main className=" min-h-dvh mx-auto ">
      <Outlet />
    </main>
    <Footer />

  </>)
}

export default App




