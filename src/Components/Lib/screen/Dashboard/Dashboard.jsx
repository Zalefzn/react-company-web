import React, {Component, Fragment} from 'react';
import axios from 'axios';
import ApiDataGet from '../../api/Api';


class DashboardUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            employes: [],
        }
    }

    componentDidMount(){
       
        try{    
            
        }catch(err){
            console.info(err);
        }
    }

    componentDidUpdate(){ 
        
    }

    categoryPage = (value) => {
        try{
            
        }catch(err){
            console.info(err);
        }
    }
    

    render(){
        return(
            <Fragment>
                <div className="container-dashboard-page">
                    <div className="dashboard-content">
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default DashboardUser;