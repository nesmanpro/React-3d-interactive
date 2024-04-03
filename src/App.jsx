import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Bottle } from "./components/Bottle";
import AboutMe from "./components/AboutMe";


function App() {


  return (
    <BrowserRouter>
      <div className="bg-arenaClaro min-h-screen">

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/bottle' element={<Bottle />} />
          <Route exact path='/aboutme' element={<AboutMe />} />

        </Routes>
      </div>


    </BrowserRouter>
  )
}

export default App
