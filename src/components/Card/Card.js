import React from 'react';
import './Card.css';

const Card = React.memo(({ monster }) => {
  console.log(`Card ${monster.id} rendered`);
  return (
    <div className="Card">
      <img
        alt={monster.name}
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
});

export default Card;
