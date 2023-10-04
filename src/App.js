import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>

    </>
  );
}

export default App;
