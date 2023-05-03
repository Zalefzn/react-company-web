import React, {useState} from 'react';
import { getImageUrl } from './utils';
import { card } from './data';


const CardServ = () => {
    const listCard = card.filter(card =>
        card.profession === 'chemist');
    const listItems = listCard.map(card => 
        <li>
            <img
        src={getImageUrl(card)}
        alt={card.name}
      />
      <p>
        <b>{card.name}:</b>
        {' ' + card.profession + ' '}
        known for {card.accomplishment}
      </p>
        </li>
        );

        return <ul>{listItems}</ul>


   
}

export default CardServ;