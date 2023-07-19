import React from 'react';
import {Space} from 'antd';
import MainMenu from './MainMenu';
import SideMenu from './SideMenu';
import ContentMenu from './Content';
import FooterMenu from './AppFooter';
import '../style/HomeDash.css';

function HomeDash(){
    return(
        <div className="home-main-menu">
            <MainMenu />
            <Space className="sideMenuContent">
                <SideMenu />
                <ContentMenu />
            </Space>
            <FooterMenu />
        </div>
    );
}

export default HomeDash;
