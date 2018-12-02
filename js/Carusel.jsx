import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js'
import Style from '../sass/Carusel.scss'

class Carusel extends React .Component{
    constructor(props){
        super(props);
        this.state={
            cCount:0,
        }
    }
    minusCounter = () =>{
        this.setState({cCount:this.state.cCount-1})
    }
    plusCounter =()=>{
        this.setState({cCount:this.state.cCount+1},()=>{
            console.log(this.state.cCount);
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.minusCounter}>Left</button>
                <button onClick ={this.plusCounter}>Right</button>
                <div className="carusel_wrapper">
                    <ul className="listbox">
                        <li className ="carusel_item" style={{'backgroundColor':'red'}}></li>
                        <li className ="carusel_item" style={{'backgroundColor':'blue'}}></li>
                        <li className ="carusel_item" style={{'backgroundColor':'green'}}></li>
                    </ul>   
                </div>
            </div>
        )
    }
}
export default Carusel;