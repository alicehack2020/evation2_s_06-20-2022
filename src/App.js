import "./App.css";
import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
function App() {
  return <div >{
    <>
    <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </>
     
  }</div>;
}

export default App;
