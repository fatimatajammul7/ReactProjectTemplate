import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  const sendData = async () => {
    try {
      const response = await axios.post('http://localhost:8000/data', {
        message: 'Hello server!',
      });
      console.log(response.data);
      setData('Data sent successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Client</h1>
      <button onClick={sendData}>Send Data</button>
      <p>{data}</p>
    </div>
  );
}

export default App;
