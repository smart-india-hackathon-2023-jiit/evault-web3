import Navbar from './Navbar';
import React from 'react';
import Services from './Services';
import About from './About';
import Contact from './Contact';

const Mainpage = ({onConnect, isUserLogged, correctNetwork}) => {
  return (
    <div>
      <div
        className="relative"
        style={{
          backgroundImage: `url($../../public/background.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar style={{ zIndex: '2' }}  onConnect={onConnect}/>
        <div className="pt-16 flex justify-center items-center">
          <div className="bg-opacity-90 h-screen w-screen text-center">
            <h1 className="text-8xl text-[#EEE]">Welcome to Our eVault</h1>
            <p className="text-4xl text-[#EEE]">We provide excellent services.</p>
          </div>
        </div>
      </div>
      <Services isUserLogged={isUserLogged} correctNetwork={correctNetwork}/>
      <About />
      <Contact />
    </div>
  );
};

export default Mainpage;
