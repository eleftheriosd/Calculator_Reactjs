/* eslint no-eval: 0 */
import React,{ Component } from 'react';
import EqualSign from './EqualSign';
import Number from './Number';
import Operators from './Operators';
import Demical from './Demical';
import ClearAC from './ClearAC';

export default class Calculator extends Component {
  constructor(){
    super()
    this.state={
        screen:'0',
        screenAct:'0',
        nums:[],
        numsAct:[],
        valueToHold:[],
        zerocheck:false,
        pluscheck:true,
        minuscheck:true,
        multcheck:true,
        divcheck:true,
        equalcheck:false
    }
  }
  action= (id) => {
    //CLEAR COMPUTER
    if(id==='clear'){
      this.setState({
        screen:'0',
        screenAct:'0',
        nums:[],
        numsAct:[],
        valueToHold:[],
        zerocheck:false,
        pluscheck:true,
        minuscheck:true,
        multcheck:true,
        divcheck:true,
        equalcheck:true
      })
          //HANDLE DOT
    }else if(id==='demical'){
      console.log(this.state.nums[this.state.nums.length - 1])
      if(this.state.nums.length===0 ){
        this.setState({nums:0})
      }
      if(this.state.numsAct.length===0){
        this.setState({numsAct:0})
      }
      const arr=Object.values(this.state.numsAct)
      let check=0;
      for(let i=0;i<=arr.length;i++)
        if(arr[i]==="."){
          check=1;
        }
        if(check===0){  
      this.setState((prevState)=>{
        const check1=this.state.nums[this.state.nums.length - 1];
        if(check1===`+`||check1===`-`||check1===`/`||check1===`*`){
          prevState.nums+='0.';
          prevState.numsAct='0.';
          this.setState({
            screen:prevState.nums,
            screenAct:prevState.numsAct,
            zerocheck:true,
            pluscheck:true,
            minuscheck:true,
            multcheck:true,
            divcheck:true,
            equalcheck:true
          })
        }else{
        prevState.nums+='.';
        prevState.numsAct+='.';
        this.setState({
          screen:prevState.nums,
          screenAct:prevState.numsAct,
          zerocheck:true,
          pluscheck:true,
          minuscheck:true,
          multcheck:true,
          divcheck:true,
          equalcheck:true
        })
      }
      })}
      //HANDLE PLUS
    }else if(id==='add'){
     
      let valid=false;
      const check1=this.state.nums[this.state.nums.length - 1];
      if(check1===`+`||check1===`-`||check1===`/`||check1===`*`){
        valid=true;
        this.setState((prevState)=>{
          prevState.nums=prevState.nums.substring(0, prevState.nums.length-1);
      })
    }
      if (this.state.pluscheck===true){
        this.setState((prevState)=>{
        prevState.nums+='+';
        this.setState({
          screen:prevState.nums,
          screenAct:'+',
          numsAct:[],
          zerocheck:true,
          pluscheck:false,
          equalcheck:true
        })
      })
    }
    if (valid===true){
      this.setState({
        minuscheck:true,
        multcheck:true,
        divcheck:true,
        equalcheck:true
      })
    }
    if(this.state.valueToHold.length!==0){
      this.setState((prevState)=>{
        prevState.nums+=this.state.valueToHold +`+`;
        this.setState({ 
          screen:this.state.valueToHold
         })
      })
    }
    //HANDLE MINUS
  }else if(id==='subtract'){
    let valid=false;
      const check1=this.state.nums[this.state.nums.length - 1];
      if(check1===`+`||check1===`-`||check1===`/`||check1===`*`){
        valid=true;
        this.setState((prevState)=>{
          prevState.nums=prevState.nums.substring(0, prevState.nums.length-1);
      })
    }
      if (this.state.minuscheck===true){
      this.setState((prevState)=>{
        prevState.nums+='-';
        this.setState({
          screen:prevState.nums,
          screenAct:'-',
          numsAct:[],
          zerocheck:true,
          minuscheck:false,
          equalcheck:true
          })
        })
      }
      if (valid===true){
        this.setState({
          pluscheck:true,
          multcheck:true,
          divcheck:true,
          equalcheck:true
        })
      }
      if(this.state.valueToHold.length!==0){
        this.setState((prevState)=>{
          console.log(this.state)    
          prevState.nums=this.state.valueToHold ;
          prevState.nums+='-';
          this.setState({ 
            screen:this.state.valueToHold,
           })
        })
      }
      //HANDLE MULTIPLY
    }else if(id==='multiply'){
      let valid=false;
        const check1=this.state.nums[this.state.nums.length - 1];
        if(check1===`+`||check1===`-`||check1===`/`||check1===`*`){
          valid=true;
          this.setState((prevState)=>{
            prevState.nums=prevState.nums.substring(0, prevState.nums.length-1);
        })
      }
        if (this.state.multcheck===true){
        this.setState((prevState)=>{
          prevState.nums+='*';
          this.setState({
            screen:prevState.nums,
            screenAct:'*',
            numsAct:[],
            zerocheck:true,
            multcheck:false,
            equalcheck:true
            })
          })
        }
        if (valid===true){
          this.setState({
            pluscheck:true,
            minuscheck:true,
            divcheck:true,
            equalcheck:true
          })
        }
        if(this.state.valueToHold.length!==0){
          this.setState((prevState)=>{
            console.log(this.state)    
            prevState.nums=this.state.valueToHold ;
            prevState.nums+='*';
            this.setState({ 
              screen:this.state.valueToHold,
             })
          })
        }
        //HANDLE DIVIDE
      }else if(id==='divide'){
        let valid=false;
          const check1=this.state.nums[this.state.nums.length - 1];
          if(check1===`+`||check1===`-`||check1===`/`||check1===`*`){
            valid=true;
            this.setState((prevState)=>{
              prevState.nums=prevState.nums.substring(0, prevState.nums.length-1);
          })
        }
          if (this.state.divcheck===true){
          this.setState((prevState)=>{
            prevState.nums+='/';
            this.setState({
              screen:prevState.nums,
              screenAct:'/',
              numsAct:[],
              zerocheck:true,
              divcheck:false,
              equalcheck:true
              })
            })
          }
          if (valid===true){
            this.setState({
              pluscheck:true,
              minuscheck:true,
              multcheck:true,
              equalcheck:true
            })
          }
          if(this.state.valueToHold.length!==0){
            this.setState((prevState)=>{
              console.log(this.state)    
              prevState.nums=this.state.valueToHold ;
              prevState.nums+='/';
              this.setState({ 
                screen:this.state.valueToHold,
               })
            })
          }
          //HANDLE EQUALS!
        }else if(id==='equals'){
          if(this.state.equalcheck===true){
          let toCalculate=this.state.screen
          console.log(typeof(toCalculate))
          console.log(toCalculate)
          console.log(this.state)
          if(toCalculate[toCalculate.length -1]==='+'||toCalculate[toCalculate.length -1]==='-'
          ||toCalculate[toCalculate.length -1]==='/'||toCalculate[toCalculate.length -1]==='*'){
            this.setState((prevState)=>{
              let result=this.state.screen
              result=parseInt(result, 10)
              prevState.nums+='='+result;
              this.setState({
                screen:prevState.nums,
                screenAct:result,
                nums:[],
                numsAct:[],
                valueToHold:result,
                zerocheck:false,
                pluscheck:true,
                minuscheck:true,
                multcheck:true,
                divcheck:true,
                equalcheck:false
              })
             })
          }else{
          let result=eval(toCalculate)
          console.log("EVAL", result)
          this.setState((prevState)=>{
            prevState.nums+='='+result;
            this.setState({
              screen:prevState.nums,
              screenAct:result,
              nums:[],
              numsAct:[],
              valueToHold:result,
              zerocheck:false,
              pluscheck:true,
              minuscheck:true,
              multcheck:true,
              divcheck:true,
              equalcheck:false
            })
           })
          }
        }else{
          if(this.state.screenAct==='0' ||isNaN(this.state.screenAct)){
          this.setState({
            screen:NaN
          })
        }
        }
    }
  }
    numsHandle= (number) => {
      //HANDLE ZERO
      if(number===0){
        if (this.state.zerocheck===true){
          this.setState((prevState)=>{
            prevState.nums+=number;
            prevState.numsAct+=number;
            this.setState({
              screen:prevState.nums,
              screenAct:prevState.numsAct,
              pluscheck:true,
              minuscheck:true,
              multcheck:true,
              divcheck:true,
              equalcheck:true
            })
          })  
        }
      }else{
        this.setState((prevState)=>{
          prevState.nums+=number;
          prevState.numsAct+=number;
          this.setState({screen:prevState.nums,
            screenAct:prevState.numsAct,
            zerocheck:true,
            pluscheck:true,
            minuscheck:true,
            multcheck:true,
            divcheck:true,
            equalcheck:true
          })
        })
      }
  }
  render(){
  return (
    <div style={style}>
    <div style={container}>
    <div id="Desplay" style={display}>{this.state.screen}</div>
    <div style={displayact}>{this.state.screenAct}</div>
    <div style={clearAc} ><ClearAC action={this.action} id="clear"/></div>
    <div><Operators action={this.action} id="divide"/></div>
    <div><Operators action={this.action} id="multiply"/></div>
    <div><Number numsHandle={this.numsHandle} id="seven"/></div>
    <div><Number numsHandle={this.numsHandle} id="eight"/></div>
    <div><Number numsHandle={this.numsHandle} id="nine"/></div>
    <div><Operators action={this.action} id="subtract"/></div>
    <div><Number numsHandle={this.numsHandle} id="four"/></div>
    <div><Number numsHandle={this.numsHandle} id="five"/></div>
    <div><Number numsHandle={this.numsHandle} id="six"/></div>
    <div><Operators action={this.action} id='add'/></div>
    <div><Number numsHandle={this.numsHandle} id="one"/></div>
    <div><Number numsHandle={this.numsHandle} id="two"/></div>
    <div><Number numsHandle={this.numsHandle} id="three"/></div>
    <div style={equalSign}><EqualSign id="equals" action={this.action}/> </div>
    <div style={zero}><Number numsHandle={this.numsHandle} id="zero" /> </div>
    <div><Demical action={this.action} id="demical"/></div>
        </div>
    </div>
  )
}
}
const style={
    margin: 'auto',
    marginTop: 100,
    border: '3px solid #000',
    width: 300,
    height: 300,
    zIndex:-1
    
}
const container={
  display:'grid',
  gridTemplateColumns:'1fr 1fr 1fr 1fr',
  gridTemplateRows:'1fr 1fr 1fr 1fr 1fr 1fr 1fr ',
  height:'100%'
}

const display={
  gridColumn:'span 4',
  fontSize:30,
  width:'100%',
  height:'100%',
  backgroundColor: 'lightgreen',
}

const displayact={
  gridColumn:'span 4',
  fontSize:30,
  width:'100%',
  height:'100%',
  backgroundColor: 'lightblue',
  borderTop:'1px solid #000'
}


const clearAc={
  gridColumn:'span 2',
}

const equalSign={
  gridRow:'span 2'
}

const zero={
  gridColumn:'span 2'
}
