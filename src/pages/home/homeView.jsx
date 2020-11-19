import React, { Component } from 'react';
import { Layout} from 'antd';
import './home.scss'

// import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'

import AppAside from '../../containers/AppAside'
import AppHeader from '../../containers/AppHeader'
// import { menuToggleAction } from '../../store/actionCreators' // 引入redux 状态管理
 

const { Footer, Content, } = Layout
class Home extends Component {
    state = {
        collapsed: false, // 默认收缩状态是展开
        // leftPx: 200,
     }
    render() { 
        let {menuToggle} = this.props
        return (  
            <div className="p-home">
                <Layout>
                    {/* 侧边导航 */}
                    <AppAside menuToggle={this.state.collapsed}/>
                    {/* 右边的内容 */}
                    <Layout style={{marginLeft: this.state.collapsed ? '80px' : '200px', minHeight: '100vh' }}>
                        {/* 头部导航 */}
                        <AppHeader 
                            menuToggle={this.state.collapsed}
                            menuClick={this.menuClick}
                            loginOut={this.loginOut}
                        />
                        <Content>
                            内容区域
                        </Content>
                        <Footer>
                            公共底部
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
    loginOut() {
     console.log('开始退户')   
    }
    // 开始伸缩的
    menuClick() {
        // this.setState({
        //     collapsed: !this.state.collapsed
        // })
    }

    // 下拉菜单点击
    dropClick(key){
        console.log(key, '当前的值')
    }

}

// const stateToProp = state => ({
//     menuToggle: state.menuToggle
// })

// // redux 状态请求
// const dispatchToProp = dispatch => ({
//     menuClick() {
//         dispatch(menuToggleAction())
//     }
// })

export default Home
