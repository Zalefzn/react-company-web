import { Typography, Space, Badge} from 'antd';
import { BellFilled, MailOutlined }  from '@ant-design/icons';
import React from 'react';

function MainMenu() {
    return(
        <div className="main-menu-admin">
            <Typography.Title>
                Dashboard
            </Typography.Title>
            <Space>
                <Badge count={10}>   
                    <MailOutlined style={{fontSize: 30}}/>
                </Badge>
                <Badge count={20}>
                    <BellFilled style={{fontSize: 30}}/>
                </Badge>
            </Space>
        </div>
    );
}

export default MainMenu;