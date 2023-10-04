import './App.css';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import BooksDetail from './pages/BooksDetail';
import Home from "./pages/Home"
import Authors from './pages/Author';
import { Route, Routes } from "react-router-dom"
import AuthorCollection from './pages/AuthorCollection';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/book/:id" element={<BooksDetail />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/book/by/:name" element={<AuthorCollection />} />
      </Routes>

    </>
  );
}

export default App;
