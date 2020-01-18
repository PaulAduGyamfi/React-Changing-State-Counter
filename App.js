import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        }
        this.add = this.add.bind(this)
        this.subtract = this.subtract.bind(this)
        this.reset = this.reset.bind(this)
    }
    
    add(){
        this.setState((prev)=>{
            return{
                counter: prev.counter + 1
            }
        })
    }
    
    subtract(){
        this.setState((prev)=>{
            return{
               counter: prev.counter - 1 
            }
        })
    }
    
    reset(){
        this.setState({counter: 0})
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <span>
                    <button onClick={this.subtract}>-</button>
                    <button onClick={this.add}>+</button>
                </span>
                    <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default App