import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    console.log(val.target.value);
    setData(val.target.value);
  }
  return (
    <div>
      <h1>Get Input box value</h1>
      {/*<h2>{data}</h2>*/}
      {print ? <h2>{data}</h2> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print data</button>
    </div>
  );
}
