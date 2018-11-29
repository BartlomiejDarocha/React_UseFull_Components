import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js'
import Style from '../sass/Slider.scss'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.test2 =0;
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
        console.log(this.counter , 'coutne if--')
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
        console.log(this.counter , 'coutne if++')
    }
    starShorcut =(e)=>{
        this.counter = e.target.dataset.index;
        this.setState({
            banCurrent: this.state.banProps[this.counter],
        })
        console.log(this.counter, 'sortcutt')
    }
    render() {
        let newlist = this.state.banProps 
        let liList =newlist.map((liItem)=>{
            return (<li data-index = {liItem.index} onClick ={this.starShorcut} key={liItem.id} style={{color: liItem.index===this.state.banCurrent.index?'red':'black'}}>*</li>)
        })
        const newBanners =this.state.banProps 
        const banners=newBanners.map((banner, index)=>{
            return <div key={banner.id} style={{backgroundColor:banner.color}} className ={`banner${banner.index}`}>
                    <img src=""></img>
                    <h1>BANNER{index}</h1>
                    <p>{banner.des}</p>
                    <button>Click</button>
                </div>
        })
        return (
            <div className='slider-wrapper'>
                <div className='slider-content' style={{
                    'transform': `translateX(-${this.counter*(100/this.state.banProps.length)}%)`// to jest kurwa zajebiste!!!
                    // `translateX(-${this.state.banCurrent.index*(100/this.state.banProps.length)}%)`// to jest kurwa zajebiste!!!
                }}>
                    {banners}
                </div>
                {/* front of slider */}
                <div className="slider-stateContent">
                    <div className='slider-leftArrow'>
                        <span style={{color: this.counter <= 0? 'gray':'red'}} onClick={ this.counter <=0? false : this.prevSlide}>Left</span>
                    </div>
                    <div className='slider-middleList'>
                        <ul>
                            {liList}
                        </ul>
                    </div>
                    <div className='slider-RightArrow'>
                        <span style={{color: this.counter >=this.state.banProps.length-1? 'gray':'red'}} onClick={this.counter>=this.state.banProps.length-1? this.nextSlide: this.nextSlide}>Right</span>
                    </div>
                </div>
            </div>

        )
    }
}

export default Slider;
