import React, { Component } from 'react'
import Buttom from './components/Bottom'
import Navbar from './components/Navbar'
import Content from './components/Content'

import 'antd/dist/antd.css'
import { connect } from 'react-redux'


export default class App extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Content/>
        <Buttom/>
      </div>
    )
  }
}
