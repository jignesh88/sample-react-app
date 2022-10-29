import './App.css';
import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [click, setClick] = useState(0);
  const [msg, setMsg] = useState('');
  const onClick = async () => {
    const result = await axios.get('http://localhost:4000')
    setMsg(result.data);
    if (result.data === 'Hello World!') {
      const newClick = click + 1;
      setClick(newClick);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Button clicked for: {click} times.</div>
        <div>Message: {msg}</div>
        <Button variant='contained' onClick={()=>{ onClick() }}>Click here</Button>
      </header>
    </div>
  );
}

export default App;
