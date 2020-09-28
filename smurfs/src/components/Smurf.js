import React from 'react';

const Smurf = ({data}) => {
    return (
      <div className = 'smurf'>
        <h3>{data.name}</h3>
        <div>
            <p>Age: {data.age}</p>
            <p>Height: {data.height}</p>
        </div>
      </div>
    )
  }

export default Smurf;