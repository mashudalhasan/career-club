import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='font-manrope'>
      <Header></Header>
      <Outlet></Outlet>
      <Toaster />
      <Footer></Footer>
    </div>
  );
};

export default App;