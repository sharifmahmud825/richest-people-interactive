import React from 'react';
import './People.css';

const People = (props) => {
  // object destructuring
  const { img, name, age, country, source, networth, desc } = props.people;
  return (
    <div className='container'>
      <div className='card mb-3 rounded'>
        <div className='row g-0'>
          <div className='col-md-4 p-3 img-section text-center'>
            <img src={img} className='img-fluid rounded-circle' alt='...' />
            <h3 className='my-3 name p-2 rounded text-white'> {name} </h3>
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h2 className='card-title'>{source}</h2>
              <p className='card-text'>Age: {age}</p>
              <p className='card-text'>{desc}</p>
              <p className='card-text'>Lives in : {country}</p>
              <h4 className='card-text'> $ {networth}B</h4>
              <button
                onClick={() => props.handleAddToFavorite(props.people)}
                className='btn btn-success'
              >
                <i className='fas fa-heart me-3'></i>
                Add to Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
