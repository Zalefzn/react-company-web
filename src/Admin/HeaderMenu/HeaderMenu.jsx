import React from 'react';

function HeaderMenu(){

    const logo = 'logo.png';

    return(
       <header className="headerApp">
            <div className="logo-header-menu-item">
                <img src={logo} alt="" />
            </div>
            <div className="list-item-content-menu">
                <ul className="ul=list-menu-item">
                    <li className="list-dashboard-menu">Dashboard</li>
                    <li className="list-button-menu"><button type="button" name="button">Back</button></li>
                </ul>
            </div> 
       </header>
    );
}

export default HeaderMenu;