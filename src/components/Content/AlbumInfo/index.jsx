import React, { Component } from 'react'
import Swiper from './Swilper'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class albumsInfo extends Component {
  state={
    newsInfo:[],
    newsCover:[],
    fristUrl:''
  }
  componentDidMount(){
    axios({
      url:'http://localhost:3000/api/news',
      method:'get'
    }).then(res=>{
      this.setState({
        newsInfo:res.data.data.list
      })
    })
    axios({
      url:'http://localhost:3000/api/recommends',
      method:'get'
    }).then(res=>{
      this.setState({
        newsCover:res.data.data
      })
    })
  }
  render() {
    return (
      <div className='albumsInfo'>
        <div className='main'>
          <Swiper value={this.state.newsCover}/>
          <div className='info'>
              <b>塞壬唱片MSR</b> (Monster Siren Records)，泰拉世界十世纪最大的音乐发行商之一。

从异教重金属乐队至偶像产业，塞壬唱片MSR旗下的签约艺人涉猎音乐各方面。

根据最新统计数据，塞壬唱片MSR占有泰拉世界30%以上的音乐市场。

<b>Monster Siren Records </b>(MSR), one of the world's largest music publishers in the tenth century in Terra.

From heavy metal bands to the idol industry, MSR artists are involved in all aspects of music.

According to the latest statistics, MSR occupies more than 30% of the music market in Terra.
          </div>
        </div>
        <div>
          <div className='new'>
            <h3>最新上架</h3>
            <div>
              <NavLink to='/Album'>
                <img src={this.state.fristUrl.coverUrl} alt="" />
                <p>{this.state.fristUrl.name}</p>
                <div></div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
