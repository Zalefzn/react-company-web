import React from 'react';
import { Fragment } from 'react';
import  {CategoryCard}  from './CardCategory';
import './CategCard.css';
import swal from 'sweetalert'
import axios from 'axios';

const urlApi = "http://localhost:3004/";
const handleButton = (id) => {
    try{
        axios.get(urlApi + "data").then((res) => {
            console.info(res.data);
        });
    }catch(err){
        console.info(err);
    }
     swal({
        title: "!Success",
        text: "Get data Success}",
        icon: "success"
    })
 } 

const CardCateg = (id) => {
    const categorys = CategoryCard.filter(cards => 
    cards.id === id.id);
    const listItemCateg = categorys.map(cards =>
        <Fragment>
            <div className="card-categ">
                <div className="card-item-categ" onClick={handleButton}>
                    <h3 className="text-card-categ">{cards.category_name}</h3>
                </div>
            </div>
        </Fragment>
        );
    return <ul>{listItemCateg}</ul> 
}

export default CardCateg;