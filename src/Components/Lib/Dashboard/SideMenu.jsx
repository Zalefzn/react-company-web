import { DashboardOutlined, MediumWorkmarkOutlined, MenuOutlined, PercentageOutlined, TableOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

function SideMenu() {
    return(
        <div className="side-menu-admin">
           <Menu 
           className="items-menu"
           onClick = {(item) => {
            
           }}
            items={
                [
                    {
                        label: "Dashboard",
                        key: '/',
                        icon: <MenuOutlined/>
                    },
                    {
                        label: "Absensi",
                        key: '/absen',
                        icon: <PercentageOutlined/>
                    },
                    {
                        label: "Task list",
                        key: '/task',
                        icon: <TableOutlined/>
                    },
                    {
                        label: "Karyawan",
                        key: '/karyawan',
                        icon: <UserOutlined/>
                    }
                ]
            }
           />
        </div>
    );
}

export default SideMenu;