import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import ApiDataGet from '../../api/Api';
import CardCateg from './CategCard';


class DashboardUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            dashboard: [],
            absensi: [],
            value: "data",
        }
    }
    
    componentDidMount(){
        try{    
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((res) => { 
                    const absensi = res.data;
                    this.setState({
                        absensi
                    })
                }
            )
        }catch(err){
            console.info(err);
        }
    }
    
    componentDidUpdate(){ 
        
    }

    categoryPage = async(value) => {
        try{
            await axios.get().then((res) => {
                
            })
        }catch(err){
            console.info(err);
        }
    }
    

    render(){

        const { absensi } = this.state;
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
                    <section className="section-page">
                        <div className="section-category">
                           <div className="card-category">
                                <CardCateg
                                absensi= {absensi}
                                id="1"/>
                           </div>
                        </div>
                    </section>
                </div>

                <div className="absensi-page">
                    <div className="absensi">
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default DashboardUser;