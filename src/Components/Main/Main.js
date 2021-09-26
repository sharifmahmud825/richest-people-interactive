import React, { useEffect, useState } from 'react';
import Favorite from '../Favorite/Favorite';
import People from '../People/People';
import './Main.css';

const Main = () => {
  // data fetch using hook
  const [peoples, setPeoples] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    fetch('./data.JSON')
      .then((res) => res.json())
      .then((data) => setPeoples(data));
  }, []);

  //   add event handler
  const handleAddToFavorite = (people) => {
    const favPeople = [...favorite, people];
    setFavorite(favPeople);
  };

  return (
    // peoples container
    <div className='container'>
      <div className='row my-3'>
        <div className='col-md-8 peoples-container'>
          {peoples.map((people) => (
            <People
              key={people.id}
              people={people}
              handleAddToFavorite={handleAddToFavorite}
            ></People>
          ))}
        </div>

        {/* Select people container  */}
        <div className='col-md-4 selected-container'>
          <Favorite favorite={favorite}></Favorite>
        </div>
      </div>
    </div>
  );
};

export default Main;
<h2>this is main part</h2>;
