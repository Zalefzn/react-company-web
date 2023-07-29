import React from 'react';
import '@ant-design/icons';
import 'antd';
import './style/AdminPanel.css';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import FooterMenu from './FooterMenu/FooterMenu';
import SideMenu from './SideMenu/SideMenu';
import ContentMenu from './ContentMenu/ContentMenu';

function AdminPanel(){
    return(
        <div className="AdminApp">
            <HeaderMenu />
            <div className="sideMenuContentPage">
                <SideMenu />
                <ContentMenu />
            </div>
           <FooterMenu />
        </div> 
    );
}

export default AdminPanel;