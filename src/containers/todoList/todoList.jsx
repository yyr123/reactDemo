import React, { Component } from 'react';
import { Input, Button } from 'antd'
import './todoList.scss'


class TodoList extends Component {
  state = {
    inputVal: '', // 输入框的值
    allList: [], // 所有的数组
    isFinish: false, // 是否完成
  }
  inputChange = (e) => {
    console.log(this, e.target.value, '输入得到呵呵')
    this.setState({
      inputVal: e.target.value
    })
  }

  // 使用箭头函数
  addText = () => {
    // 不能直接对state的数据进行处理
    let newList = this.state.allList
    newList.push(this.state.inputVal)
    this.setState({
      allList: newList,
    }, () => {
      this.setState({
        inputVal: ''
      })
    })
  }

  // 删除当前
  deleteItem = (index) => {
    let currentList = this.state.allList
    currentList.splice(index, 1) // 从当前索引开始删除本身1个
    this.setState({
      allList: currentList
    })
  }
  render() {

    return (
      <div style={{ margin: '20px' }}>
        <p>这里是todolist</p>
        <Input onInput={this.inputChange} value={this.state.inputVal} style={{ width: '200px', margin: '20px' }} placeholder="请输入" />
        <Button type="primary" onClick={this.addText}>开始添加</Button>
        <ul>
          {
            this.state.allList.map((item, index) => {
              return (
                <li style={{ margin: '10px 20px' }} key={index}>
                  <span onClick={() => {
                    this.state.isFinish = !this.state.isFinish
                  }} className={this.state.isFinish ? 'green' : 'red'}>{item}</span> 
                  {/* 可使用箭头函数，进行参数的传递 */}
                  <Button style={{ marginLeft: '10px' }} size='small' type='danger' onClick={() => this.deleteItem(index)}>删除当前的</Button>
                </li>)
            })
          }
        </ul>

      </div>
    );
  }

}

export default TodoList;