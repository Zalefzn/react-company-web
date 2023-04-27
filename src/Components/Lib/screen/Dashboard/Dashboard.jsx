import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import ApiDataGet from '../../api/Api';


class DashboardUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            absensi: [],
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
                <div>
                    {/*header content*/}
                    <div className="container-dashboard-page">
                        <ul className="list-item-header">
                            <li className="list-items-dashboard"><h2 className="dashboard-text">Dashboard</h2></li>
                            <li className="list-items-button"><button type="button" name="button" className="btn-btn-back"><Link to="/HomeScreen">Back</Link></button></li>
                        </ul>
                    </div>

                    {/* Body Content */}
                    <div className="body-content-dashboard">

                    </div>
                </div>  
            </Fragment>
        );
    }
}

export default DashboardUser;