import React, { Component } from 'react'

export default class Number extends Component {
    render() {
      let number=0;
      const {id}= this.props;
        if(id==='one'){
          number=1;
        }else if(id==='two'){
          number=2;
        }else if(id==='three'){
          number=3;
        }else if(id==='four'){
          number=4;
        }else if(id==='five'){
          number=5;
        }else if(id==='six'){
          number=6;
        }else if(id==='seven'){
          number=7;
        }else if(id==='eight'){
          number=8;
        }else if(id==='nine'){
          number=9;
        }
    return (
      <button value={number} onClick={this.props.numsHandle.bind(this,number)}  style={style}>
        {number}
      </button>
    )
  }
}
const style={
  border:'1px solid #222',
  fontSize:30,
  width:'100%',
  height:'100%'
}