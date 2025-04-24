

const PlayerCard = ({ player, onSelect, isSelected, view }) => {
    const buttonText = view === 'selected' ? 'Remove Player' : (isSelected ? 'Already Selected' : 'Choose Player');
  
    return (
      <div className=" border shadow-sm rounded-xl p-4 w-full md:w-80">
        <img src={player.img} alt={player.name} className="md:w-full w-100  h-80 md:h-60 object-cover object-top rounded-lg mb-3"/>
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span>👤</span> {player.name}
        </h2>
        <div className="flex items-center gap-2 my-1">
          <span>🏳️ {player.country}</span>
          <span className="bg-gray-200 text-sm px-2 py-0.5 rounded">{player.role}</span>
        </div>
        <div className="text-sm my-1">
          <strong>Rating:</strong> {player.rating}<br />
          <strong>Batting:</strong> {player.batting}<br />
          <strong>Bowling:</strong> {player.bowling}
        </div>
        <div className="text-sm mt-2 font-semibold">Price: ${player.price}</div>
  
        <button
          className={`mt-3 px-4 py-2 rounded transition 
            ${view === 'selected' ? 'bg-red-500 text-white hover:bg-red-600' : 
              isSelected ? 'bg-gray-400 text-white cursor-not-allowed' : 
              'bg-blue-600 text-white hover:bg-blue-700'}`}
          onClick={() => {
            if (!isSelected || view === 'selected') onSelect(player);
          }}
          disabled={isSelected && view !== 'selected'}
        >
          {buttonText}
        </button>
      </div>
    );
  };
  
  export default PlayerCard;
  