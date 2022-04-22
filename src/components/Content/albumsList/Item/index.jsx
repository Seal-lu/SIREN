import React, { Component } from 'react'
export default class Item extends Component {
  render() {
    let {coverUrl,name,artistes} = this.props
    return (
      <div className='item'>
          <img src={coverUrl} alt="" />
          <div>
              <p>{name}</p>
              <p className='arter'>{artistes}</p>
          </div>
      </div>
    )
  }
}
