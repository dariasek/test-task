import React from 'react';
import LoginPage from './components/LoginPage';
import './index.css'
import { Toaster } from 'sonner';
import { useGlobalContext } from './context/GlobalProvider';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActivationPage from './components/ActivationPage';
import AccountPage from './components/AccountPage';
import Nav from './components/Nav';

function App() {
  const context = useGlobalContext()

  return (
      <div className=''>
        <BrowserRouter>
        {context?.isLoggedIn ? <Nav /> : ''}
          
          {/* {
            context?.isLoggedIn
          } */}
          <Routes>
            <Route path='/' element={context?.isLoggedIn ? <HomePage /> : <LoginPage />} />
            <Route path='/activation' element={<ActivationPage />} />
            <Route path='/account' element={<AccountPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-center" />
      </div>
  );
}

export default App;
