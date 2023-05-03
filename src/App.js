import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState("en");
  const [from, setFrom] = useState("en");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const translate = () => {

  }

  useEffect(() => {
    axios.get('https://libretranslate.de/languages',
      { headers: { 'Accept': 'application/json' } }).then(res => {
        console.log(res.data);
        setOptions(res.data);
      })
  }, [])

  return (
    <div className="App">
      <div>
        From ({from}) :
        <select value={from} onChange={e => setFrom(e.target.value)}>
          {options.map(opt => <option key={opt.code} value={opt.code}> {opt.name} </option>)}
        </select>

        To : ({to}):
        <select value={to} onChange={e => setTo(e.target.value)}>
          {options.map(opt => <option key={opt.code} value={opt.code}> {opt.name} </option>)}
        </select>
      </div>

      <div>
        <textarea value={input} onChange={e => setInput(e.target.value)} cols="50" rows="5"></textarea>
      </div>

      <div>
        <textarea value={output} readOnly cols="50" rows="5"></textarea>
      </div>

      <div>
        <button onClick={() => {
          axios.post('https://libretranslate.de/translate', {
            q: input,
            source: from,
            target: to
          }, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(res => {
            setOutput(res.data.translatedText);
          })
        }}> Translate </button>
      </div>
    </div>
  );
}

export default App;
