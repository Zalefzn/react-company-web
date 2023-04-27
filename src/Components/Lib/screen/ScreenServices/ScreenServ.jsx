import React, {Component, Fragment} from 'react';
import './ScreenServ.css';
import axios from 'axios';


class ScreenServ extends Component{
    constructor(props){
        super(props);
        this.state = {
            person : [],
        }
    }

    componentDidMount(){
        
    }

    componentDidUpdate(){

    }

    
    render(){
        return( 
            <Fragment>
                <div className="content-servis">
                <div className="content-page-servis">
                    <h1 className="content-prg-servis">
                        TOOLS & TECH OUR TEAM OF EXPERTS USE
                    </h1>
                    <p className="content-prg2-servis">
                        Techkuy is constantly growing its skillsets to deliver you top-notch reliable software development.
                    </p>
                </div>
                <div className="card-servis">   
                    <div className="item-servis-page">
                        <ul className="ul-servis-li-vol1">  
                            <li className="img-servis-react"><img className="react-img" src="react.png" alt=""></img></li>
                            <li className="img-servis-react"><img className="vue-img" src="vue.png" alt=""></img></li>
                            <li className="img-servis-react"><img className="flutter-img" src="flutter.png" alt=""></img></li>
                            <li className="img-servis-react"><img className="php-img" src="php.png" alt=""></img></li>
                        </ul>
                        <ul className="ul-servis-li-vol2">
                            <li className="img-servis-react"><img className="react-img" src="node.png" alt=""></img></li>
                            <li className="img-servis-react"><img className="vue-img" src="laravel.png" alt=""></img></li>
                            <li className="img-servis-react"><img className="flutter-img" src="golang.png" alt=""></img></li>
                            <li className="img-servis-react"><img className="php-img" src="mysql.png" alt=""></img></li>
                        </ul>
                    </div>
                </div>
                
                 {/*Services Product Content*/}
                <div className="service-product">
                    <div className="product-items">
                        
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default ScreenServ;