import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import { Admin } from './components/Admin';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto p-5" style={{ backgroundColor: "#dbdbdb" }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
