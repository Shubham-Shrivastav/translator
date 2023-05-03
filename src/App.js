import './App.css';
import { useState, useEffect } from 'react';
const axios = require('axios').default; //after installed the npm add axios we have to acquire this ..

function App() {
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState("en");
  const [from, setFrom] = useState("en");
  const [input, setInput] = useState("en");
  const [output, setOutput] = useState("en");

  useEffect(() => {
    axios.get('https://libretranslate.de/languages',
      { headers: { 'accept': 'application/json' } }).then(res => {
        console.log(res.data);
        setOptions(res.data);
      })
  }, [])

  //curl -X 'GET' \'https://libretranslate.de/languages' \-H 'accept: application/json'

  return (
    <div className="App">
      <div>
        From ({from}) :
        <select onChange={e => setFrom(e.target.value)}>
          {options.map(opt => <option key={opt.code} value={opt.code}> {opt.name} </option>)}
        </select>
        To ({to}):
        <select onChange={e => setTo(e.target.value)}>
          {options.map(opt => <option key={opt.code} value={opt.code}> {opt.name} </option>)}
        </select>
      </div>
      <div>
        <textarea cols="50" rows="8"></textarea>
      </div>
      <div>
        <textarea cols="50" rows="8"></textarea>
      </div>
      <div>
        <button> Translate </button>
      </div>
    </div>
  );
}

export default App;
