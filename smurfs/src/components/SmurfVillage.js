import React from 'react';
import Smurf from './Smurf'

const SmurfVillage = (props) => {
    return (
      <section className='villageInfo'>
        <h2>Population: { props.smurfData.length }</h2>
        <h2>Meet the Villagers:</h2>
        <div className='smurf-container'>
          { props.smurfData.map(smurf => <Smurf key= { smurf.id } data = { smurf } />) }
        </div>  
      </section>
    )
  }

  export default SmurfVillage;