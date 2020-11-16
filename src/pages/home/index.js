import React, { Component } from 'react';
import { Layout } from 'antd';
import './home.scss'
import SiderLayout from '../SiderLayout'
const { Header, Footer, Sider, Content } = Layout
class Home extends Component {
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
                        <Header>头部</Header>
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
}
export default Home;