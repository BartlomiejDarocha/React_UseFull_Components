import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js'
import Style from '../sass/Slider.scss'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.counter = 0;
        this.state = {
            banProps: data.banner,
            banCurrent: data.banner[this.counter],
            test: data,
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
            return <div key={banner.id} style={{backgroundColor:banner.color}} className ="banner1">BANNER{index}</div>
        })
        return (
            <div className='slider-wrapper'>
                <div className='slider-content'>
                    {banners}
                </div>
                {/* front of slider */}
                <div className="slider-stateContent">
                    <div className='slider-leftArrow'>
                        <span onClick={this.prevSlide}>Left</span>
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

export default Slider;
