import React, { Component } from 'react';
import Songlist from './songsList'
import {Space} from 'antd'
import {
    CaretRightOutlined,
    ShareAltOutlined,
    VerticalAlignBottomOutlined
  } from '@ant-design/icons'
import axios from 'axios';

class Index extends Component {
    componentDidMount(){
        axios({
            url:`http://localhost:3000/api/album/${this.props.match.params.cid}/data`,
            method:'get'
        }).then(res=>{
            this.setState({
                selected:res.data.data
            })
        })
    }
    state={
        selected:{}
    }
    render() {
        return (
            <div className='album' key={this.props.match.params.cid}>
                <div className='album_top'>
                    <div><img src={this.state.selected.coverUrl} alt="" /></div>
                    <div className='album_Info'>
                        <p>{this.state.selected.name}</p>
                        <div className='intro'>{this.state.selected.intro}</div>
                        <div>
                            <Space size={'large'}>
                                <div className='select' style={{background:'black',color:'yellow'}}><CaretRightOutlined/>播放全部</div>
                                <div className='select'> <ShareAltOutlined />分享</div>
                                <div className='select'><VerticalAlignBottomOutlined />下载全部</div>
                            </Space>
                        </div>
                    </div>
                </div>
                <div className='album_bottom'>
                    <h3>歌曲列表</h3>
                    <Songlist cid={this.props.match.params.cid}/>
                </div>
            </div>
        );
    }
}
export default (props)=><Index {...props} key={props.location.pathname} />
