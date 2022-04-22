import React, { Component } from 'react'
import Item from './Item'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class List extends Component {
  
  state={
    albumsList:[]
  }
  componentDidMount(){
      axios({
          url:'http://localhost:3000/api/albums',
          method:'get'
      }).then(res=>{
        // console.log(res.data.data);
        
        this.setState({
          albumsList:res.data.data
        })
      })
  }  
  render() {
    return (
      <div className='albumsList'>
          {this.state.albumsList.map(item=>{
            return <NavLink to={'/Album/'+item.cid } key={item.cid}><Item {...item}/></NavLink>
          })}
        
      </div>
    )
  }
}
