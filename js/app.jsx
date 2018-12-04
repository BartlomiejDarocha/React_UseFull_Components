import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider.jsx';
import Carusel from './Carusel.jsx';
import FadeSlider from './FadeSlider.jsx'
import data from './data.js'
import Style from '../sass/style.scss'


document.addEventListener('DOMContentLoaded', function () {
    class App extends React.Component {
        render() {
            return (
                <div>
                    <h1>Hello Word</h1>
                    {/* <Slider/> */}
                    {/* <FadeSlider/> */}
                    <Carusel/>
                </div>                
            )
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


