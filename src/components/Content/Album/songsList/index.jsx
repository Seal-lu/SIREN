import axios from 'axios';
import React, { Component } from 'react';
import Song from '../../song'
import { Space } from 'antd';
import {
    HeartOutlined,
    DownloadOutlined
  } from '@ant-design/icons'
import { NavLink,Route } from 'react-router-dom';

class Index extends Component {
    componentDidMount(){
        axios({
            url:'http://localhost:3000/api/songs',
            method:'get'
        }).then(res=>{
            let list = []
            res.data.data.list.map(item=>{
                if(item.albumCid == this.props.cid){
                    list.push(item)
                }
            })
            this.setState({
                songList:list
            })
            // console.log(this.state.songList,this.props);
        })
    }
    state={
        songList:[]
    }
    render() {
        return (
            <div>
                <div className='songsTitle'><span>音乐标题</span><span>歌手</span></div>
                <ul className='songsList'>
                    {this.state.songList.map((item,index)=>{
                        return <SongInfo {...item}  key={item.cid}/>
                    })}
                </ul>
            </div>
        );
    }
}

class SongInfo extends Component {
    render() {
        return (
            <li>
                <div>
                    <div>
                        <Space>
                            <HeartOutlined />
                            <DownloadOutlined />
                        </Space>
                    </div>
                    <NavLink to={'/Song/'+this.props.cid} key={this.props.cid}><b>{this.props.name}</b></NavLink>
                </div>
                <div>{this.props.artists.map((art,index)=>{return <p key={index}>{this.props.artists[index]}</p> })}</div>
            </li>
        );
    }
}


export default Index
