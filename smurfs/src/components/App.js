import React, { useEffect } from "react";
import {connect} from 'react-redux';

import {getSmurfData, updateSmurfData} from '../actions'

import SmurfVillage from './SmurfVillage';
import Form from './Form';

import "./App.css";

const App = (props) => {
  useEffect(() => { 
    props.getSmurfData()
  }, [])   

  return (
      <div className="App">
        <h1>Welcome to the SMURF REDUX VILLAGE</h1>
        { props.isLoading 
        ? <h2>Loading Village Data...</h2> 
        : <div>
            <SmurfVillage smurfData = {props.smurfData} /> 
            <Form getSmurfData={props.getSmurfData} updateSmurfData={props.updateSmurfData} />
          </div>
        }
        
      </div>
    );
}

const mapStatetoProps = (state) => {
  return {
    smurfData:  state.smurfData,
    isLoading:  state.isLoading,
  }
}

export default connect(mapStatetoProps, {getSmurfData, updateSmurfData})(App);
