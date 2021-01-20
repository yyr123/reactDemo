import React, { Component } from 'react';
import { Layout} from 'antd';
import './home.scss'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux' // 用于组件和redux进行联系

import AppAside from '../../containers/AppAside'
// import TodoList from '../../containers/todoList'
import HomePage from '../../containers/homePage'
import AppHeader from '../../containers/AppHeader'
import { menuToggleAction } from '../../store/actionCreators' // 引入redux 状态管理
 

const { Footer, Content, } = Layout
class DefaultLayout extends Component {
    state = {
        collapsed: false, // 默认收缩状态是展开
     }
    render() { 
        let {menuClick, menuToggle} = this.props
        return (  
            <div className="p-home">
                <Layout>
                    {/* 侧边导航 */}
                    <AppAside menuToggle={menuToggle}/>
                    {/* 右边的内容 */}
                    <Layout style={{marginLeft: menuToggle ? '80px' : '200px', minHeight: '100vh' }}>
                        {/* 头部导航 */}
                        <AppHeader 
                            menuToggle={menuToggle}
                            menuClick={menuClick}
                            loginOut={this.loginOut}
                        />
                        <Content>
                            <HomePage></HomePage>
                             {/* <TodoList></TodoList> */}
                        </Content>
                        <Footer>
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
    loginOut() {
    //  this.props.history.push('/')
    //  this.props.history.push('/login')

     console.log('开始退户')   
    }
    inputChange(val) {
        console.log(val, '开始点击')
    }

    // 下拉菜单点击
    dropClick(key){
        console.log(key, '当前的值')
    }

}

// 这里是把所有redux的东西拿出来  进去
const stateToProp = state => ({
    menuToggle: state.menuToggle
})

// redux 状态请求   出来
const dispatchToProp = dispatch => ({
    menuClick() {
        // 点击事件触发收缩
        dispatch(menuToggleAction())
    }
})

export default withRouter(
    connect(
        stateToProp,
        dispatchToProp
    )(DefaultLayout)
)
