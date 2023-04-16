import React, {Component, Fragment} from 'react';
import axios from 'axios';
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
                {/*header content*/}
                <div className="container-dashboard-page">
                    <div className="logo-dashboard">
                        <h2 className="dashboard-text">Dashboard</h2>
                    </div>
                    <div className="btn-back">
                        <button type="button" name="button" className="btn-btn-back">Back</button>
                    </div>
                </div>

                {/* Body Content */}
                
            </Fragment>
        );
    }
}

export default DashboardUser;