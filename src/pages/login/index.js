import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd'
import FormItem from 'antd/lib/form/FormItem';
import './index.scss'


class Login extends Component {
    render() {
        // 初始化表单、
        const layout =  {
            labelCol: {
                span: 8,
            }
        
        }
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            }
        } 
        const onFinish = (values) => {
            console.log('Success:', values);
            // 跳转到首页
            this.props.history.push('./')

            // 成功之后这里请求接口
            // this.props.history.push('./containers')
        };
        
        const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        };

        // 重置表单
        const onRest = () => {
            console.log('点击了重置')
            // this.formMdal.resetFields()
        }
        return ( 
            <div className="p-login">
                <h1>登录页面</h1>
                <Form 
                  {...layout}
                  name="basic"
                  initialValues = {{
                      remember: true,
                  }}
                  onFinish = {onFinish}
                  onFinishFailed = {onFinishFailed}
                >
                    {/* 用户名输入 */}
                    <Form.Item
                        label="用户名称"
                        name="username"
                        rules = {[
                            {
                                required: true,
                                message: '请输入用户名'
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    {/* 密码输入 */}
                    <Form.Item
                        label = "密码"
                        name = "Password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码'
                            }
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    {/* 记住我 */}
                    <Form.Item
                        {...tailLayout}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    {/* 提交按钮 */}
                    <FormItem {...tailLayout}>
                    {/* htmlType 文本类型是提交 */}
                        <Button type="primary" htmlType="submit">表单提交</Button>
                        <Button style = {{margin: '0 8px'}} type="primary" htmlType="button" 
                        onClick={onRest}
                        >重置表单</Button>
                    </FormItem>
                </Form>
            </div>
         );
    }
}
 
export default Login;