import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';


const Navbar = lazy(() => import('./components/Navbar'))
const Home = lazy(() => import('./pages/Home'));
const Books = lazy(() => import('./pages/Books'));
const BooksDetail = lazy(() => import('./pages/BooksDetail'));
const Authors = lazy(() => import('./pages/Author'));
const AuthorCollection = lazy(() => import('./pages/AuthorCollection'));
const Contact = lazy(() => import('./pages/Contact'));
const Cart = lazy(() => import('./pages/Cart'));
const Footer = lazy(() => import('./components/Footer'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/book/:id" element={<BooksDetail />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/book/by/:name" element={<AuthorCollection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
