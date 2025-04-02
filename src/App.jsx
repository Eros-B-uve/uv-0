import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react'

import Inicio from './Pages/Inicio';
import List from './Pages/List';
import Header from './components/Header';
import Datos from './Pages/Datos';
import Footer from './components/Footer';
import MailS from './Pages/EmailSignup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router >
      <div className="flex flex-col min-h-screen">
      <Header />
      <main className='flex-grow' >
        <Routes className="">
          <Route path="/" element={<Inicio />} />
          <Route path="/list" element={<List />} />
          <Route path="/datos" element={<Datos />} />
          <Route path="/mails" element={<MailS />} /> 
        </Routes>
        </main>
      <Footer className="bg-gray-800 text-white p-4"/>
      </div>
    </Router>
  );
}

export default App;
