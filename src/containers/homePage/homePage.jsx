import React, { Component } from 'react';
import { Layout, Row, Col, Icon, Divider } from 'antd'
import './index.scss'

class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <Layout className='index animated fadeIn'>
                <Row gutter={12} className='index-header'>
                    <Col span={6}>
                        <div className='base-style wechat'>
                            {/* <Icon type='wechat' className='icon-style' /> */}
                            <div>
                                <span>999</span>
                                <div>微信</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6} >
                        第二个模块
                    </Col> 
                    <Col span={6} >
                        第三个模块
                    </Col> 
                    <Col span={6} >
                        第四个模块
                    </Col> 
                </Row>

            </Layout>
         );
    }
}
 
export default HomePage;