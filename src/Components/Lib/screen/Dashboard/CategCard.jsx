import React from 'react';
import  CategoryCard  from './CardCategory';
import './CategCard.css';


const CardCateg = (id) => {
    const categorys = CategoryCard.filter(cards => 
        cards.id === id.id);

    const listItemCateg = categorys.map(cards => 
        <div className="card-categ">
            <div className="card-item-categ">
                <h3 className="text-card-categ">{cards.category_name}</h3>
            </div>
        </div>
        )

    return <ul>{listItemCateg}</ul>
}

export default CardCateg;