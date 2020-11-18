import React, { Component } from 'react';
import { Button, Layout } from 'antd';
import './home.scss'
import SiderLayout from '../SiderLayout'
const { Header, Footer, Sider, Content } = Layout
class Home extends Component {
    state = {
        collapsed: false, // 默认收缩状态是展开
     }
    render() { 
        return (  
            <div className="p-home">
                <Layout>
                    <Sider
                        style={{
                            overflow:'auto',
                            height: "100vh",
                            position: "fixed",
                            left: '0',
                        }}
                    >
                        <SiderLayout></SiderLayout>
                    </Sider>
                    {/* 右边的内容 */}
                    <Layout style={{
                        marginLeft: 200
                    }}>
                        <Header>
                            <Button type="primary" onClick={this.goOpen}>收缩</Button>
                            头部
                        </Header>
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
    goOpen = ()=> {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }
}
export default Home;