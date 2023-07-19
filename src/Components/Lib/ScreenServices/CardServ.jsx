import React, {useState} from 'react';
import { card } from './data';
import '../style/CardServ.css';


const CardServ = (id) => {
  const cardConnect = card.filter(card  => 
    card.id === id.id);
  const listItems = cardConnect.map(card => 
     <div className="list-card-item" key={id}>
      <div className="list-cards">
        <div className="cards" >
          <img className="image-data-card" src={card.image} alt=""></img>
          <h3 className="header-cards">{card.header}</h3>
          <p className="desc-cards">{card.desc.a}</p>
          <p className="desc-cards-2">{card.desc.b}</p>
        </div>
      </div>
     </div>
    );

    return <ul>{listItems}</ul>
}

export default CardServ;