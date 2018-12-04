import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js'
import Style from '../sass/Carusel.scss'

class Carusel extends React .Component{
    constructor(props){
        super(props);
        this.state={
            cCount:0,
            Testprops:['link1','link2','link3','link4','link....'],// to bedzie wrzucone jako props wyzej
            fade: false,
            blockControlArrows: false,
        }
    }
    prevArrow = () =>{
        if(this.state.cCount <=0){
            this.setState({cCount:this.state.Testprops.length-1, blockControlArrows:true})
        }else{
            this.setState({cCount:this.state.cCount-1, blockControlArrows:true})
        }
        this.prevArrowTimeout =setTimeout(()=>{
            this.setState({
                blockControlArrows: false,
            },console.log(this.state.blockControlArrows , "arrows"))
        },1000)//tu bedzie props)
    }
    nextArrow =()=>{
        if(this.state.cCount>= this.state.Testprops.length-1){
            this.setState({cCount:0, blockControlArrows:true,})
        }else{
            this.setState({cCount:this.state.cCount+1, blockControlArrows:true,})
        }
        this.prevArrowTimeout =setTimeout(()=>{
            this.setState({blockControlArrows: false,})
        },1000)//tu bedzie props)
    }
    setOn=(e)=>{
        let tempVaule = e.target.dataset.id;
        tempVaule =Number(tempVaule);
       
        this.setState({fade: true, cCount: tempVaule,})

        this.timerIdSetON = setTimeout(()=>{
            this.setState({fade: false,})
        },750)
    }
    componentWillUnmount(){
        clearTimeout(this.timerIdSetON);
    }
    render(){
        const newLiList = this.state.Testprops; // lista na dole gwiazdki
        const liList = newLiList.map((elOFList, index) =>{
            return <li data-id ={index} onClick={this.setOn} key ={index} style={{'color': index===this.state.cCount? 'red':'black'}}>*</li>
        })
        const newTable = this.state.Testprops;
        let caruselContent;
        if(this.state.fade){
            caruselContent= newTable.map((item, index)=>{ // pojawianie sie przez kase fade
                return<li 
                    style={{
                        'display':this.state.cCount===index? 'block' : 'none'}} 
                    className={`.carusel_item_fade fade`}
                    >{item}</li>
            })
        }else{
            caruselContent = newTable.map((item, index)=>{ // pojawianie sie przez karuzele
                return <li className={`carusel_item ${this.state.cCount ===index? 'active':'' || index === newTable.length-1? this.state.cCount===0? 'disactive': ''  :  this.state.cCount===index+1? 'disactive':''}`}>
                {item}</li>
            });
        }
        return (
            <div>
                {/* <button onClick={!this.state.blockControlArrows? this.prevArrow: null}>Left</button> // na tej podsatwie sterowanie 
                <button onClick ={!this.state.blockControlArrows?this.nextArrow: null}>Right</button>
                <button data-id ='0' onClick ={this.setOn}>0</button>
                <button data-id ='1' onClick ={this.setOn}>1</button>
                <button data-id ='2' onClick ={this.setOn}>2</button>
                <button data-id ='3' onClick ={this.setOn}>3</button> */}
                    {/* <div className="carusel_wrapper"> */}
                    {/* <ul className="listbox"> // na tej podstawie działa map powyżej
                        <li className ={`${this.state.cCount === 0? 'active':'' || this.state.cCount===1? 'disactive': ''} carusel_item`} style={{'backgroundColor':'red'}}></li>
                        <li className ={`${this.state.cCount === 1? 'active':'' || this.state.cCount===2? 'disactive': ''} carusel_item`} style={{'backgroundColor':'blue'}}></li>
                        <li className ={`${this.state.cCount === 2? 'active':'' || this.state.cCount===3? 'disactive': ''} carusel_item`} style={{'backgroundColor':'green'}}></li>
                        <li className ={`${this.state.cCount === 3? 'active':'' || this.state.cCount===0? 'disactive': ''} carusel_item`} style={{'backgroundColor':'orange'}}></li>
                    </ul>  */}
                    <div className="carusel_wrapper">
                    <ul className='listbox'>
                        {caruselContent}
                    </ul>
                    {/* {front of Carusel}   */}
                    <div className="caruselFront">
                        <div className='caruselLeftArrow'>
                            <span onClick={this.prevArrow}>&#60;</span>
                        </div>
                        <div className='caruselListControl'>
                            <ul>
                                {liList}
                            </ul>
                        </div>
                        <div className='caruselRightArrow'>
                            <span onClick={this.nextArrow}>&#62;</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Carusel;