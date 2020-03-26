import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setMonsters(data);
    })();
  }, []);

  const handleSearchChange = useCallback(e => {
    console.log('handeling change');
    setSearchField(e.target.value);
  }, []);

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="App__title">Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search Monsters"
        handleChange={handleSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
