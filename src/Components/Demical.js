import React, { Component } from 'react'

export default class Demical  extends Component {
  render() {
    const{ id } = this.props;
  let dot='.'
    return (
      <button value={dot} onClick={this.props.action.bind(this,id)}  style={style}>
        {dot}
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