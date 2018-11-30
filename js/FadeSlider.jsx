import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js'
import Style from '../sass/FadeSlider.scss'

class FadeSlider extends React .Component{
    constructor(props) {
        super(props);
        this.counter = 0;
        this.state = {
            banProps: data.banner,
            banCurrent: data.banner[this.counter],
        }
    }
    prevSlide = () => {
        if(this.counter <= 0){
            this.counter = this.state.banProps.length-1;
            this.setState({
                banCurrent: this.state.banProps[this.counter],
            })
        }else {
            this.counter --;
            this.setState({
                banCurrent: this.state.banProps[this.counter],
            })
        }
        console.log(this.counter, 'ps')
    }
    nextSlide = () => {
        if(this.test2>=this.state.banProps.length){
            this.test2 =0;
        }
        if(this.counter >=this.state.banProps.length-1){
            this.counter = 0;
            this.setState({
                banCurrent: this.state.banProps[this.counter],
            })
        }else{
            this.counter ++;
            this.setState({
                banCurrent: this.state.banProps[this.counter],
            })
        }
        console.log(this.counter, 'ns')
    }
    starShorcut =(e)=>{
        this.counter = e.target.dataset.index;
        this.setState({
            banCurrent: this.state.banProps[this.counter],
        },()=>{
            console.log(this.counter, 'sortcutt')
        })
        
    }
    render(){
        const newLiList = this.state.banProps;
        const liList = newLiList.map(elOFList=>{
            return <li data-index ={elOFList.index} onClick={this.starShorcut} key ={elOFList.id} style={{'color':elOFList.index===this.state.banCurrent.index? 'red':'black'}}>*</li>
        })
        const newBanners =this.state.banProps;
        const banners = newBanners.map(banner=>{
            return <div key={banner.id} style={{
                'backgroundColor':`${banner.color}`,'display':`${this.state.banCurrent.index ===banner.index? 'block':'none'}`}} 
                className ={`banner${banner.index} fade` }>
                    <img src=""></img>
                    <h1>BANNER{banner.index}</h1>
                    <p>{banner.des}</p>
                    <button>Click</button>
                </div>
        })
        return(
            <div className='slider-wrapper'>
                <div className='slider-content'>
                    {banners}
                </div>
                {/* front of slider */}
                <div className="slider-stateContent">
                    <div className='slider-leftArrow'>
                        <span onClick={this.prevSlide}>&#60;</span>
                    </div>
                    <div className='slider-middleList'>
                        <ul>
                            {liList}
                        </ul>
                    </div>
                    <div className='slider-RightArrow'>
                        <span onClick={this.nextSlide}>Right</span>
                    </div>
                </div>
            </div>

        )
    }
}
export default FadeSlider;