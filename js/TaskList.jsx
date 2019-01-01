import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js'
import Style from '../sass/Carusel.scss'
class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: 'it will be change',
            list: [],
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
    handleAddButton =(event)=>{
        event.preventDefault();
        let tempArry = this.state.list.slice();
        tempArry.push(this.state.inputText);
        this.setState({inputText:'', list: tempArry})
    }
    componentDidUpdate(){
        this.lengthInputTest();   
    }
    render(){
        let listDeploy = [];
        listDeploy = this.state.list.map((listElement)=>{
            return <li>{listElement}<button>Usun</button><input type="checkbox"></input></li>
        })
        return (
            <div>
                <h1>{this.state.inputText}</h1>
                <form>
                    <input className="inPutText" type="text" onChange = {this.handleText} size="20" placeholder="New Task"/>
                    <button onClick={this.handleAddButton}>Dodaj</button>
                </form>
                <ul>
                    {listDeploy}
                </ul>
            </div>
        )
    }
}

export default TaskList;