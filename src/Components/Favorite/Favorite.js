import React from 'react';

const Favorite = (props) => {
  const { favorite } = props;
  let favName = '';
  for (const fav of favorite) {
    if (fav) {
      favName = fav.name;
    }
  }

  return (
    <div>
      <h3 className='text-center fav p-3 text-white'>Favorite One's</h3>
      <h5 className='text-center'>People added : {props.favorite.length} </h5>
      <h3> {favName} </h3>
    </div>
  );
};

export default Favorite;
<h6> </h6>;
