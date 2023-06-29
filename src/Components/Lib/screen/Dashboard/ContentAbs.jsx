import { Component, Fragment} from "react";
import './ContentAbs.css';



class ContentAbs extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataAbs : [],
        }
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleChangeValue = (value) => {
        try{
            
        }catch(err){
            
        }
    }

    render(){
        return(
            <Fragment>
                <div className="data-absen-content">
                    <div className  ="content-absen">
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ContentAbs;