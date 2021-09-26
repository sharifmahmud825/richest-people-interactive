import React from 'react';
import './Favorite.css';

const Favorite = (props) => {
  const { favorite } = props || {};

  const totalReducer = (prevValue, currentValue) =>
    prevValue + currentValue.networth;

  const total = favorite.reduce(totalReducer, 0);
  return (
    <div>
      <h3 className='text-center fav p-3 text-white'>Favorite One's</h3>
      <h5 className='text-center'>People added : {props.favorite.length} </h5>
      <ul className='p-0 my-3'>
        {favorite.map((fav) => (
          <li className='d-flex justify-content-between fav-people py-2 px-4 my-2 text-align-start'>
            <h6>{fav.name}</h6>
            <h6> $ {fav.networth}B</h6>
          </li>
        ))}
      </ul>
      <hr />
      <h3 className='text-align-end'> Total Networth : $ {total}B</h3>
    </div>
  );
};

export default Favorite;
<h6> </h6>;
