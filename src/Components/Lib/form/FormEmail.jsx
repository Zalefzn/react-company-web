import React,{Component} from 'react';
import '../style/FormEmail.css';

class FormEmail extends Component{
    constructor(props){
        super(props);
        this.state = {
            post: [],
        }
    }

    render(){
        return(
            <div className="email-content">
                <div className="email-items">
                    <form>
                        <input class="input-email" placeholder='enter your email...' type="text"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormEmail;