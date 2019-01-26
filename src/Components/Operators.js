import React, { Component } from 'react'

export default class Operators  extends Component {
    render() {
      const {id} = this.props;
  let symbol='+';
    if(id==='subtract'){
      symbol='-';
    }else if(id==='multiply'){
      symbol='*';
    }else if(id==='divide'){
      symbol='/';
    }
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
  backgroundColor:'#667'
}