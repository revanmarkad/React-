import {Routes, Route} from "react-router-dom";
import About from  "./components/RoutNavbar/About";
import Home from  "./components/RoutNavbar/Home";
import Login from  "./components/RoutNavbar/Login";
import Navbar from "./components/RoutNavbar/Navbar";
 
function App() {
  return (
    <>
    <Navbar />
    
    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/login" element={ <Login /> } />
    </Routes>
    </>
  );
}

export default App;