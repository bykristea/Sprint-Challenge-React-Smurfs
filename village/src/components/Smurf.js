import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>{props.age} smurf years old</p>
      <strong>{props.height} tall</strong>
      <span className="far fa-trash-alt delete-btn" onClick={() => props.deleteSmurf(props.id)}></span>

    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  age: '',
  height: ''
  
};

export default Smurf;

