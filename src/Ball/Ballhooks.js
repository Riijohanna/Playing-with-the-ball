import React, { useState } from 'react';
import './Ball.css';

const buttonStyles = {
  margin: '40px',
  padding: '15px',
  border: '5px solid steelblue',
  fontSize: '15px',
  fill: 'lightgrey',
};

 const Ballhooks = () => {

  const [clicks, setClicks] = useState(0);


  return (

      <div><h2>Hooks</h2><div id='circle'>
      <div className={clicks === 0 ? 'circle neutral' : clicks %10 === 0 ? 'circle pink' : clicks %2 === 0 ? 'circle even' : 'circle odd'} onClick={() => setClicks(clicks + 1)}>
      <p>{clicks}</p></div></div>
        <button style={buttonStyles} onClick={() => setClicks(0)}>RESET</button>
        <button style={buttonStyles} onClick={() => setClicks(clicks + 1)}>ADD</button>
        <button style={buttonStyles} onClick={clicks > 0 ? () => setClicks(clicks - 1) : () => setClicks(0)}>REMOVE</button>
      </div>

    );
  }


export default Ballhooks;
