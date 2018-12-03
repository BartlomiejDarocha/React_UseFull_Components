import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js'
import Style from '../sass/Carusel.scss'

class Carusel extends React .Component{
    constructor(props){
        super(props);
        this.state={
            cCount:0,
            Testprops:['a','b','c','d'],
            fade: false,
            blockButton: null,
        }
    }
    minusCounter = () =>{
        if(this.state.cCount <=0){
            this.setState({cCount:this.state.Testprops.length-1},()=>{
                console.log(this.state.cCount, 'minus po if');
            })
        }else{
            this.setState({cCount:this.state.cCount-1},()=>{
                console.log(this.state.cCount, 'minus po else');
            })
        }
    }
    plusCounter =()=>{
        if(this.state.cCount>= this.state.Testprops.length-1){
            this.setState({cCount:0},()=>{
                console.log(this.state.cCount, 'plus po if');
            })
        }else{
            this.setState({cCount:this.state.cCount+1},()=>{
                console.log(this.state.cCount, 'plus po else');
            })
        }
    }
    setOn=(e)=>{
        let tempVaule = e.target.dataset.id;
        tempVaule =Number(tempVaule);
       
        this.setState({
            fade: true,
            cCount: tempVaule,
        },()=>{
            console.log(this.state.cCount);
            console.log(this.state.blockButton);
        })
        this.timerIdSetON = setTimeout(()=>{
            this.setState({fade: false,},()=>{console.log(this.state.fade);})
        },750)

        clearTimeout(this.timerIdSetON);

    }
    render(){
        const newTable = this.state.Testprops;
        let caruselContent;
        if(this.state.fade){
            caruselContent= newTable.map((item, index)=>{
                return<li 
                    style={{
                        'display':this.state.cCount===index? 'block' : 'none'}} 
                    className={`.carusel_item_fade fade`}
                    >{item}</li>
            })
            console.log('teste2222');
        }else{
            caruselContent = newTable.map((item, index)=>{
                return <li className={`carusel_item ${this.state.cCount ===index? 'active':'' || index === newTable.length-1? this.state.cCount===0? 'disactive': ''  :  this.state.cCount===index+1? 'disactive':''}`}>
                {item}</li>
            });
        }
        return (
            <div>
                <button onClick={this.minusCounter}>Left</button>
                <button onClick ={this.plusCounter}>Right</button>
                <button data-id ='0' onClick ={this.setOn}>0</button>
                <button data-id ='1' onClick ={this.setOn}>1</button>
                <button data-id ='2' onClick ={this.setOn}>2</button>
                <button data-id ='3' onClick ={this.setOn}>3</button>
                <div className="carusel_wrapper">
                    {/* <ul className="listbox">
                        <li className ={`${this.state.cCount === 0? 'active':'' || this.state.cCount===1? 'disactive': ''} carusel_item`} style={{'backgroundColor':'red'}}></li>
                        <li className ={`${this.state.cCount === 1? 'active':'' || this.state.cCount===2? 'disactive': ''} carusel_item`} style={{'backgroundColor':'blue'}}></li>
                        <li className ={`${this.state.cCount === 2? 'active':'' || this.state.cCount===3? 'disactive': ''} carusel_item`} style={{'backgroundColor':'green'}}></li>
                        <li className ={`${this.state.cCount === 3? 'active':'' || this.state.cCount===0? 'disactive': ''} carusel_item`} style={{'backgroundColor':'orange'}}></li>
                    </ul>  */}
                    <ul className='listbox'>
                        {caruselContent}
                    </ul>  
                </div>
            </div>
        )
    }
}
export default Carusel;