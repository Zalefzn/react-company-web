import React, {Component, Fragment} from 'react';
import './CategCard.css';
import swal from 'sweetalert'
import axios from 'axios';


class CategoryCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            category: [],
        }
    }
        
componentDidMount(){
    try{
        axios.get('http://localhost:3004/category').then((res) => {
            this.setState({
                category: res.data
            });
              swal({
                title: "!Success",
                text: "Get data Success}",
                icon: "success"
            });
        });
    }catch(err){
        console.info(err);
    }
}

render(){
    const {category} = this.state;
    
    const data = category.filter((categ) => categ.id !== null);
    const listCategory = data.map((categ) => (
        <Fragment key={categ.id}>
        <div className="card-categ" >
            <div className="card-item-categ">
                <div className="text-card-categ" >
                    <h4>{categ.name}</h4>
                </div>
            </div>
        </div>
    </Fragment>
    ))
    return <ul>{listCategory}</ul>  
    }
}

export default CategoryCard
