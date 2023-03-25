import react, {Component, Fragment} from 'react';


class DashboardUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            employes: [],
        }
    }


    render(){
        return(
            <div>
                <p className="container-dashboard">
                    Dashboard User
                </p>
            </div>
        );
    }
}

export default DashboardUser;