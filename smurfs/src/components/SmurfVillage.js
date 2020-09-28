import React from 'react';
import Smurf from './Smurf'

const SmurfVillage = (props) => {
    return (
      <section className='villageInfo'>
        <h2>Population:</h2> 
        <p>{ props.smurfData.length }</p>
        <h2>Meet the Villagers:</h2>
        <div className='smurf-container'>
          { props.smurfData.map(smurf => <Smurf key= { smurf.id } data = { smurf } />) }
        </div>  
      </section>
    )
  }

  export default SmurfVillage;