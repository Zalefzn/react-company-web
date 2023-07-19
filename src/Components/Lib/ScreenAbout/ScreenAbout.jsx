import React, {Component} from 'react';
import '../style/ScreenAbout.css';

class ScreenAbout extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    render(){
        return(
           <div className="content-about-page">
            <div className="about-page">
                <div className="image-content-about">
                    <img className="image-about" src="pict_vol2.png" alt="" />
                </div>
                <div className="desc-about-content">
                   <ul>
                        <li className="a"><p className="p-content-about">
                            Techkuy Company
                        </p></li>
                        <li className="a"><img src="star.png" alt=""></img></li>
                        <li className="a"><p className="rate-about"><span>8.9</span></p></li>
                   </ul>
                </div>
                <div className="desc-about-content-vol2">
                    <p className="text-about">
                        our company is engaged in information<br></br>
                        technology, we contribute to software<br></br>
                        development and education to help<br></br>
                        customers solve the problems they face<br></br>
                        with the help of technology.
                    </p>
                    <button className="btn-color-about" type="button" name="button">Protofolio</button>
                </div>
            </div>
           </div>
        );
    }
}

export default ScreenAbout;