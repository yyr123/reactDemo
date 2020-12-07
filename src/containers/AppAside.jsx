// 这里是侧边导航
import React from 'react';
import PropTypes from 'prop-types'
import SiderLayout from './SiderLayout'
import { Layout } from 'antd'
const { Sider} = Layout


const AppAside = props => {
    let { menuToggle } = props 
    return (
        // 收缩按钮放在最外边 而不是放在menu里面
        <Sider
            collapsed={menuToggle}
            style={{
                overflow:'auto',
                height: "100vh",
                position: "fixed",
                left: '0',
            }}
        >
            <SiderLayout></SiderLayout>
        </Sider>
    )
}

// 向外传值
AppAside.propTypes = {
    menuToggle: PropTypes.bool,
}

export default AppAside