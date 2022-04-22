import React, { Component } from 'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import List from './albumsList'
import AlbumsInfo from './AlbumInfo'
import Album from './Album'
import Song from './song'
import anime from 'animejs'
import './index.css'
import {CaretLeftOutlined} from '@ant-design/icons'
export default class Content extends Component {
  render() {
    return (
        <div className='content'>
            <HashRouter>
              <List/>
              <Switch>
                <Route path='/AlbumInfo' component={AlbumsInfo}  />
                <Route path='/Album/:cid' component={Album}/>
                <Route path='/Song/:cid' component={Song}/>
                <Redirect from='/' to='/AlbumInfo' />
              </Switch>
            </HashRouter>
        </div>
    )
  }
  
}
