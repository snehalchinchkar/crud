import React from 'react';
import './cal.css';
class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sum:0

        }
    }
    add=()=>{
        let value=document.getElementById("input").value
        
        console.log(value)
        console.log(this.state.sum)
if(value===''){
    alert("please enter the value")
}
this.setState({sum:Number(value)+this.state.sum})
    }
    
    sub=()=>{
        let value=document.getElementById("input").value
        
if(value===''){
    alert("please enter the value")
}
this.setState({sum:Number(value)-this.state.sum})
    }
   
    render(){
        return(
            <>
            <div id="main">
                <div id="a">ADD and SUBTRACT</div>
            <div id="in">
              Enter the Number: <input type="number" id="input"/>  
            </div>
            <div>
                <button id="button" onClick={this.add}>Add</button>
                
            </div>
            <div>
                <button id="button2" onClick={this.sub}>Sub</button>
            </div>
            <div id="total">
                Total : {this.state.sum}
            </div></div>
            </>
      
        )
    }
}
export default Dashboard;