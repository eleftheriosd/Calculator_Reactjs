import React, { Component } from 'react'

export default class ClearAC extends Component {
    render() {
      const {id}=this.props;
    let symbol='AC'
    return (
      <button value={symbol} onClick={this.props.action.bind(this,id)} style={style}>
        {symbol}
      </button>
    )
  }
}

const style={
    border:'1px solid #222',
  fontSize:30,
  width:'100%',
  height:'100%',
  color:'white',
  backgroundColor:'#222'
}