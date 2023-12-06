import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Greeting() {
  const [greeting, setGreeting] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then((response) => setGreeting(response.data.message))
      .catch(() => {
        setError('An error occurred while fetching the greeting.');
      });
  }, []);

  return (
    <div>
      {error ? (
        <p>
          Error:
          <br />
          {error}
        </p>
      ) : (
        <h1>
          Greeting:
          {greeting}
        </h1>
      )}
    </div>
  );
}

export default Greeting;
