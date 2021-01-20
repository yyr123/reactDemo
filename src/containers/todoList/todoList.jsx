import React, { Component } from 'react';
import { Input, Button, message } from 'antd'
import './todoList.scss'


class TodoList extends Component {
  state = {
    inputVal: '', // 输入框的值
    allList: [], // 所有的数组
    isFinish: false, // 是否完成
  }
  inputChange = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  // 使用箭头函数
  addText = () => {
    if (this.state.inputVal) {
      // 不能直接对state的数据进行处理
      let newList = this.state.allList
      newList.push({
        name:this.state.inputVal,
        status: 0, // 默认是未完成
      })

      this.setState({
        allList: newList,
      }, () => {
        this.setState({
          inputVal: ''
        })
      })
    } else {
      message.info('请添加输入的数据')
    }
   
  }

  // 删除当前
  deleteItem = (index) => {
    let currentList = this.state.allList
    currentList.splice(index, 1) // 从当前索引开始删除本身1个
    this.setState({
      allList: currentList
    })
  }

  // 完成当前
  completeTask = (index) => {
    let finishList = this.state.allList
    // 三元表达式
    finishList[index].status === 1 ? finishList[index].status = 0 : finishList[index].status = 1 // 设置为已完成
    this.setState({
      allList: finishList
    })
  }
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <h1>TODOLIST</h1>
        <Input onInput={this.inputChange} value={this.state.inputVal} style={{ width: '200px', margin: '20px' }} placeholder="请输入" />
        <Button type="primary" onClick={this.addText}>开始添加</Button>
        <ul>
          {
            this.state.allList.map((item, index) => {
              return (
                <li className="liBox" key={index}>
                  <Input type="checkbox" checked={item.status === 1} onChange={() => this.completeTask(index)}></Input>
                  <span className={item.status === 1 ? 'green' : 'itemText'}>{item.name}</span> 
                  {/* 可使用箭头函数，进行参数的传递 */}
                  <Button className="deleteIcon" style={{ marginLeft: '10px' }} size='small' type='danger' onClick={() => this.deleteItem(index)}>删除当前的</Button>
                </li>)
            })
          }
        </ul>

      </div>
    );
  }

}

export default TodoList;