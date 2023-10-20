import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./views/Home";
import PizzaDetails from "./views/PizzaDetails";

import { PizzaProvider } from "./Context/PizzaContext";

function App() {
  
  return (
    <div className="App">
      <PizzaProvider>
        <BrowserRouter>
          <Navbar /> {/* Agrega el componente NavBar aquí */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<PizzaDetails />} />
          </Routes>
        </BrowserRouter>
      </PizzaProvider>
    </div>
  );
}

export default App;
