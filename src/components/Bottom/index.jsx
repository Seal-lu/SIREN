import React, { Component } from 'react'
import Miusc_botton from './Miusc_botton'
import { connect } from 'react-redux'
import { Slider,Space } from 'antd'
import {
  HeartOutlined ,
  MessageOutlined,
  HeartFilled,
  BarsOutlined
} from '@ant-design/icons'
import './index.css'
class index extends Component {

  state={
    like:true
  }
  render() {
    return (
      <div className='muisc_button'>
        <Miusc_botton/>
        <div id='songInfo'>
          <span>SongName</span>
          <p>arter</p>
        </div>
        <div className='slider'>
          <Space>

            <span>0:00</span>
            <Slider defaultValue={100} step={1} tooltipVisible={false} />
            <span>0:00</span>
          </Space>
        </div>
        <div className='iconList'>
          <Space size={'large'}>
            <div onClick={()=>this.change()}>
              {this.state.like?<HeartFilled />:<HeartOutlined />}
            </div>
            <MessageOutlined />
            <div> 
              <BarsOutlined />
            </div>

          </Space>
        </div>
      </div>
    )
  }
  change=()=>{
    this.setState({
      like:!this.state.like
    })
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    sendActive:()=>{
      dispatch({
        type:'send_add'
      })
    }
  }
}

export default connect(null,mapDispatchToProps)(index)