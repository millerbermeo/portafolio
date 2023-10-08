import React from 'react';
import { Link } from 'react-router-dom';

function Tarject({ img, title, link }) {
  return (
    <>
     <Link to={link}>
     <div
        className='w-64 h-56 flex bg-red-500 justify-center items-center'
        style={{ backgroundImage: `url(${img})` }}
      >
        <span className='font-bold text-2xl text-white'>{title}</span>
      </div>
     </Link>
    </>
  );
}

export default Tarject;
