import React, {useState} from 'react';
import { card } from './data';
import './CardServ.css';


const CardServ = (id) => {
  const cardConnect = card.filter(card  => 
    card.id === id.id);
  const listItems = cardConnect.map(card => 
     <div className="list-card-item">
      <div className="list-cards">
        <div className="cards">    
          <h3 className="header-cards">{card.header}</h3>
          <p className="desc-cards">{card.desc}</p>  
        </div>
      </div>
     </div>
    );

    return <ul>{listItems}</ul>
}

export default CardServ;