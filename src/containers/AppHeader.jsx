import React from 'react';
import PropTypes from 'prop-types'
import { Button, Menu, Layout, Row, Col, Dropdown} from 'antd';

// 引入收缩和展开的图标
import { MenuUnfoldOutlined, MenuFoldOutlined  } from '@ant-design/icons';

const { Header } = Layout   // 定义渲染的容器
const AppHeader = props => {
    // 声明props
    let { loginOut, menuClick, menuToggle } = props
    const menu = (
        <Menu>
            <Menu.ItemGroup title='用户设置'>
                <Menu.Divider />
                <Menu.Item>
                    个人设置
                </Menu.Item>
                <Menu.Item>
                    系统设置
                </Menu.Item>
            </Menu.ItemGroup>
            <Menu.Divider />
            <Menu.Item>
                <span onClick={loginOut}>
                    退出登录
                </span>
            </Menu.Item>
        </Menu>
    )
    return (
        <Header>
            <Row>
                <Col span={8}>
                <Button type="primary" onClick={menuClick}>
                    {React.createElement(menuToggle ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                </Col>
                <Col span={8} offset={8}>
                {/* https://blog.csdn.net/qq_38054239/article/details/80845697 */}
                {/* Dropdown 组件内部最外层只能接受一个元素 必须加一个span，不能直接是文本 */}
                    <Dropdown overlay={menu}>
                           <span>个人设置</span>  
                    </Dropdown>
                </Col>
            </Row>
        </Header>
    )
}

// 定义接收传值的类型
AppHeader.propTypes = {
    loginOut: PropTypes.func, // 接收的类型是函数
    menuClick: PropTypes.func, // 收缩点击事件
    menuToggle: PropTypes.bool, // 是否收起

}

export default AppHeader