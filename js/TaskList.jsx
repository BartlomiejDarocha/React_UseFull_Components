import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js'
import Style from '../sass/Carusel.scss'
class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: 'it will be change',
        }
    }
    lengthInputTest =()=>{
        if(this.state.inputText.length <= 0){
            this.setState({inputText:'it will be change',})
        }
    }
    handleText =(e)=> {
        this.setState({
            inputText: e.target.value,
        });
    }
    componentDidUpdate(){
        this.lengthInputTest();   
    }
    render(){
        return (
            <div>
                <h1>{this.state.inputText}</h1>
                <form>
                    <input className="inPutText" type="text" onChange = {this.handleText} size="20" placeholder="New Task"/>
                </form>
            </div>
        )
    }
}

export default TaskList;