import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import ApiDataGet from '../../api/Api';
import CardCateg from './CategCard';
import ContentAbs from './ContentAbs';


class DashboardUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            category: [],
            dashboard: [],
            absensi: [],
            value: "data",
        }
    }
    
    componentDidMount(){
        try{
            axios.get('http://localhost:3004/category').then((res) => {
                const category = res.data
                this.setState({
                    category
                })
            });
        }catch(err){
            console.info(err)
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
                    <section className="section-page">
                        <div className="section-category">
                           <div className="card-category">
                                <CardCateg
                                id={this.state.category}
                                category={this.state.category}
                               />
                           </div>
                        </div>
                    </section>
                </div>
            </Fragment>
        );
    }
}

export default DashboardUser;