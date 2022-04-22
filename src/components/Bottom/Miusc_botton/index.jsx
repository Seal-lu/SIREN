import React, { Component } from 'react'
import { Space} from 'antd'
import {
  LeftCircleFilled,
  RightCircleFilled,
  PauseCircleOutlined,
  PlayCircleOutlined
} from '@ant-design/icons'


export default class index extends Component {
  state={
    puse:false
  }
  render() {
    return (
      <div className='buttonList'>
        <Space size={'large'}>
          <LeftCircleFilled />
          <div onClick={()=>{
            this.change()
          }}>
            {this.state.puse?<PauseCircleOutlined />:<PlayCircleOutlined />}
          </div>
          <RightCircleFilled />
        </Space>
      </div>
    )
  }
  change=()=>{
    this.setState({
      puse:!this.state.puse
    })
  }
}
