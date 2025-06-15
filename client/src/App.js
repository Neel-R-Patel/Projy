import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => setMsg(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Student Project Hosting Platform</h1>
      <p>Backend says: <strong>{msg}</strong></p>
    </div>
  );
}

export default App;
