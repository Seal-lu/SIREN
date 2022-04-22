import React, { Component } from 'react'
import {Space} from 'antd'
import {
  SearchOutlined,
  LeftOutlined,
  RightOutlined
}from '@ant-design/icons'
import './index.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className='nav'>
        <div className='logo'></div>
        <div className='back_foward'>
          <Space size={'large'}>
            <LeftOutlined  style={{color:'yellow'}} onClick={()=>{
              window.history.back()
            }}/>
            <RightOutlined style={{color:'yellow'}} onClick={()=>{
              window.history.forward()
            }}/>
          </Space>
        </div>
        <div className='search'>
          <input type="text" placeholder='搜索曲目'/>
          <SearchOutlined/>
        </div>
      </div>
    )
  }
}
