import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import PlayerSection from './components/PlayerSection';
import Footer from './components/Footer';


function App() {
  const [coin, setCoin] = useState(0);
  const [hasClaimed, setHasClaimed] = useState(false);

  const handleClaimCredit = () => {
    if (!hasClaimed) {
      setCoin(prev => prev + 15000);
      setHasClaimed(true);
    }
  };

  return (
    <>
    <div data-theme="light">
    
      <Navbar coin={coin} />

      <Banner onClaimCredit={handleClaimCredit} hasClaimed={hasClaimed} coin={coin}  />

      <PlayerSection coin={coin} setCoin={setCoin} />
  
      <Footer />
    </div>
      
    </>
  );
}

export default App;
