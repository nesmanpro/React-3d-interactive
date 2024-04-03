import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Bottle } from "./components/Bottle";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";


function App() {


  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route exact path='/bottle' element={<Bottle />} />
        <Route exact path='/aboutme' element={<AboutMe />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
