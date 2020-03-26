import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = ({ monsters }) => {
  console.log('card list rendering');
  return (
    <div className="CardList">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
