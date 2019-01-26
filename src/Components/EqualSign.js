import React,{ Component} from 'react';

export default class EqualSign extends Component {
  render(){
    const {id}=this.props;
    let symbol='=';
    return (
        <button id='equals' value={symbol} onClick={this.props.action.bind(this,id)}  style={style}>
          {symbol}
        </button>
    )
  }
}


const style={
  border:'1px solid #222',
 fontSize:20,
 width:'100%',
 height:'100%',
 backgroundColor:'#aa2222'
}



