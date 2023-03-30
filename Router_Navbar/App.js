// import Lucky from './components/Lucky_Number/Lucky';
import {Routes, Route} from "react-router-dom";
 import About from "./components/RouterNavbar2/About"
 import Home from "./components/RouterNavbar2/Home"
 import Login from "./components/RouterNavbar2/Login"
 import Navbar from "./components/RouterNavbar2/Navbar"
import Register from "./components/RouterNavbar2/Register";
 
 
function App() {
  return (
    <>
    {/* <Lucky/> */}
    <Navbar />
     
    <Routes >
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ < Register /> } />
    </Routes>
    </>
  );
}

export default App;