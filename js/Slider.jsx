import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js'
import Style from '../sass/Slider.scss'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banProps: data.banner,
            banPropety: data.banner[0],
        }
    }
    prevSlide = () => {
        console.log(data);
        console.log(data.banner[1].id);
        console.log(this.state.banPropety);
        console.log(this.state.banProps);
    }
    nextSlide = () => {
        console.log("next side", this.state.banPropety.id);
        console.log("next side +1", Number(this.state.banPropety.index) + 1);
    }
    render() {
        // <div className='slider-content'></div>
        return (
            <div className='slider-wrapper'>
                <div className='slider-content'>
                    <div className="banner">baner 1</div>
                    <div className="banner">baner 2</div>
                    <div className="banner">baner 3</div>
                    <div className="banner">baner 4</div>
                    <div className="banner">baner 5</div>
                </div>
                <div className="slider-stateContent">
                    <div className='slider-leftArrow'>
                        <span onClick={this.prevSlide}>Left</span>
                    </div>
                    <div className='slider-middleList'>
                        <ul>
                            <li>*</li>
                            <li>*</li>
                            <li>*</li>
                            <li>*</li>
                            <li>*</li>
                            <li>*</li>
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
