import React, { Component} from 'react';
import { Menu } from 'antd'
import './layout.scss'

// import {
//     AppstoreOutlined,
//     BarChartOutlined,
//     CloudOutlined,
//     ShopOutlined,
//     TeamOutlined,
//     UserOutlined,
//     UploadOutlined,
//     VideoCameraOutlined,
//   } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';

class SiderLayout extends Component {
    state = {
        menuList: [
            {
                name: '首页',
                index: 0,
            },
            {
                name: '订单管理',
                index: 1,
            },
            {
                name: '仓库管理',
                index: 2
            }
        ], // 导航的列表
    }
    render() { 
        let newCollapsed = this.props.collapsed
        console.log(newCollapsed, '父组件传过来的值')

        return (  
            <div>
                <div className="logo">1212</div>
                <Menu 
                    theme="dark" 
                    mode="inline" 
                    defaultSelectedKeys={['4']}
                    >
                        {
                            this.state.menuList.map((item, index) => {
                                return <MenuItem key={item.index}>{item.name}</MenuItem>
                            })
                        }
                        
                    {/* <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1 
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                    nav 4
                    </Menu.Item>
                    <Menu.Item key="5" icon={<CloudOutlined />}>
                    nav 5
                    </Menu.Item>
                    <Menu.Item key="6" icon={<AppstoreOutlined />}>
                    nav 6
                    </Menu.Item>
                    <Menu.Item key="7" icon={<TeamOutlined />}>
                    nav 7
                    </Menu.Item>
                    <Menu.Item key="8" icon={<ShopOutlined />}>
                    nav 8
                    </Menu.Item> */}
                </Menu>
            </div>
        );
    }
}
 
export default SiderLayout;