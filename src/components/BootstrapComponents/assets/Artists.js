import { useState } from 'react';
import Button from 'react-bootstrap/Button'


let nextId = 0;

export default function Artists() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button onClick={() => {
        setArtists([...artists,
          {id: nextId++,
          name: name}
        ]);
      }}>Add</Button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
