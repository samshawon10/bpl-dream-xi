import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import players from '../players.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlayersSection = ({ coin, setCoin }) => {
  const [selected, setSelected] = useState([]);
  const [view, setView] = useState('all'); 

  const handleSelect = (player) => {
    if (selected.find(p => p.id === player.id)) {
      toast.warning(`${player.name} is already selected!`);
      return;
    }
    if (selected.length >= 11) {
        toast.error("You can only select up to 11 players!");
        return;
      }

    if (coin < player.price) {
      toast.error("Not enough coin to select this player!");
      return;
    }

    setSelected(prev => [...prev, player]);
    setCoin(prev => prev - player.price);

    if (coin - player.price <= 3000) {
      toast.warn(`Warning: You will have only ${coin - player.price} coins left!`);
    }

    toast.success(`${player.name} has been selected!`);
  };

  const handleDeselect = (player) => {
    setSelected(prev => prev.filter(p => p.id !== player.id));
    setCoin(prev => prev + player.price);
    toast.info(`${player.name} has been removed and coins refunded.`);
  };

  const getDisplayedPlayers = () => {
    switch (view) {
      case 'available':
        return players.filter(p => !selected.find(s => s.id === p.id));
      case 'selected':
        return selected;
      default:
        return players;
    }
  };

  return (
    <div className="p-6 pb-80">
     
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

<div className="flex justify-between mx-auto md:mx-16 mt-20 items-center mb-4">

  <div>
    <button
      onClick={() => setView('all')}
      className={`px-3 py-1 rounded ${view === 'all' ? 'bg-yellow-300' : 'border'}`}
    >
        Available ALL Players
    </button>
  </div>

  <div className="flex items-center space-x-2">
    <button
      onClick={() => setView('available')}
      className={`px-3 py-1 rounded ${view === 'available' ? 'bg-lime-400' : 'border'}`}
    >
      Available
    </button>
    <button
  onClick={() => setView('selected')}
  className={`px-3 py-1 rounded ${view === 'selected' ? 'bg-blue-400 text-white' : 'border'}`}
>
  Selected ({selected.length}/11)
</button>

  </div>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto md:mx-16">
        {getDisplayedPlayers().length > 0 ? (
          getDisplayedPlayers().map(player => (
            <PlayerCard
              key={player.id}
              player={player}
              onSelect={view === 'selected' ? handleDeselect : handleSelect}
              isSelected={!!selected.find(p => p.id === player.id)}
              view={view}
            />
          ))
        ) : (
          <p className="text-gray-500">No players to show.</p>
        )}
      </div>
      {view === 'selected' && selected.length < 11 && (
  <div className="flex justify-center mt-8">
    <button
      onClick={() => setView('available')}
     style={{ backgroundColor: 'rgb(231, 254, 41)' }}
    className="hover:brightness-95 text-black font-semibold px-6 py-2 rounded shadow transition duration-200"
    >
      ➕ Add More Players
    </button>
  </div>
)}

    </div>
  );
};

export default PlayersSection;
