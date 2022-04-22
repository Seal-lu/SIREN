import axios from 'axios';
import React, { Component } from 'react';
import store from '../../../redux/store';
import {connect} from 'react-redux'
// TODO:songPlayView
class Index extends Component {
    componentDidMount(){
        store.dispatch({
            type:"open"
        })
        axios({
            url:`http://localhost:3000/api/song/${this.props.match.params.cid}`,
            method:'get'
        }).then(res=>{
            this.setState({
                songData:res.data.data
            })
        })
    }
    state={
        songData:[]
    }
    render() {
        return (
            <div className='playView'>
                <div>
                    <img src='' alt="" />
                </div>
                <div>
                    <h1>{this.state.songData.name}</h1>
                    <div className='irch'></div>
                </div>
            </div>
        );
    }
}

export default connect()((props)=><Index {...props} key={props.location.pathname} />)
