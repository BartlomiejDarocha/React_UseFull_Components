import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/taskList.scss'
class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputText: '',
            h1Text: 'it will be change',
            list: [],
            number: 0,
        }
        this.a = null;
    }
    lengthInputTest =()=>{
        if(this.state.inputText.length === 0){
            this.setState({h1Text:'it will be change'})
        }
    }
    handleText =(e)=> {
        this.setState({
            h1Text:'',
            inputText: e.target.value,
        });
    }
    handleAddButton = (event) =>{
        event.preventDefault();
        if(this.state.inputText !== ''){
            let tempArry = this.state.list.slice();
            tempArry.push(this.state.inputText);
            this.setState({list: tempArry, inputText:''},() => {
                this.lengthInputTest();
            });    
        }else{
            alert("nie moze być puste");
        }
        
    }
    deleteHandleButton = (event) => {
        const id =  event.target.dataset.id;
        const updataList = this.state.list.slice();
        updataList.splice(id, 1);
        this.setState({list: updataList});
    }
    handleNun = (e) =>{
        if(e.target.value >= 100){
            e.target.value = 100;
        }
        let tempA = e.target.value;
        this.setState({number: tempA});
    }
    /////test
    handleNunTwo = (event) =>{
        if(event.target.value >= 100){
            event.target.value = 100;     
        }
        this.a = event.target.value; 
    }
    buttonHandlerTwo = (e) =>{
        e.preventDefault();
        this.setState({number: this.a,})
    }

    render(){
        let listDeploy = [];
        listDeploy = this.state.list.map((listElement, index)=>{
            return <li key={index}>{listElement}<button data-id ={"id " + index} onClick ={this.deleteHandleButton}>Usun</button></li>
        })
        return (
            <div>
                <h1>{this.state.h1Text}{this.state.inputText}</h1>
                <form>
                    <input className="inPutText" type="text" onChange = {this.handleText} value={this.state.inputText} size="20" placeholder="New Task"/>
                    <button onClick={this.handleAddButton}>Dodaj</button>
                </form>
                <ul>
                    {listDeploy}
                </ul>
                <form>
                    <input type="number" onChange={this.handleNun} max="100" min="0"/>
                    <input type="number" onChange={this.handleNunTwo} min="0" max="100" /><button onClick={this.buttonHandlerTwo}>Zmien</button><label>Wprowadz i zakceptuj</label>
                    <div className="changingBoxContainer">
                        <div className="precentBox" style ={{'width': this.state.number + "%"}}>
                            <span>{this.state.number}%</span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default TaskList;