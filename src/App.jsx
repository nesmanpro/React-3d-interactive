import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import NavBar from "./components/NavBar";
import { Bottle } from "./components/Bottle";


function App() {


  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route exact path='/bottle' element={<Bottle />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
