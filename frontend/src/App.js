import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <header>
          <div className="container">
            <Navbar />
          </div>
        </header>
        <div className="pages">
          <div className="home-container">
            <div className="home-content">
              <div className="workouts">
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
