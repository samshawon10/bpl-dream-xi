import React from 'react';
import cricketImg from '../assets/banner-main.png';
import bgImage from '../assets/bg-shadow.png'; 
import { toast } from 'react-toastify';
function Banner({onClaimCredit, hasClaimed,coin}) {
  const handleClick = () => {
    if (hasClaimed) {
      toast.warn(`You have already claimed your ${coin} credit!`);
    } else {
      onClaimCredit();
      toast.success(`You claimed your free credit coins!`);
    }
  };
  
  return (
    <div className="w-full h-auto flex justify-center mt-10">
      <div
        className="rounded-xl bg-black p-8 md:p-24 text-center md:mx-30 mx-4 h-auto w-full shadow-lg"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          src={cricketImg}
          alt="Cricket Banner"
          className="mx-auto mb-4 w-32 md:w-40 h-auto"
        />
        <h1 className="text-white text-2xl font-bold mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-gray-300 mb-6">
          Beyond Boundaries Beyond Limits
        </p>
       <button
          onClick={handleClick}
          className={`${
            hasClaimed ? 'bg-gray-400' : 'bg-yellow-400 hover:bg-yellow-500'
          } text-black font-semibold px-5 py-2 rounded-lg transition`}
        >
          {hasClaimed ? 'Already Claimed' : 'Claim Free Credit'}
        </button> 
      </div>
    </div>
  );
}

export default Banner;
