import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider.jsx';
import Carusel from './Carusel.jsx';
import TaskList from './TaskList.jsx';
import FadeSlider from './FadeSlider.jsx'
import data from './data.js'
import Style from '../sass/style.scss'


document.addEventListener('DOMContentLoaded', function () {
    let tableCarusel = ['link1', 'link2', 'link3', 'link4', 'link.5', 'link6', 'link....'];
    class App extends React.Component {
        render() {
            return (
                <div>
                    <h1>Hello Word</h1>
                    {/* <Slider/> */}
                    {/* <FadeSlider/> */}
                    <Carusel
                    testprops = {tableCarusel}
                    intervalTime = {4200}
                    />
                    <TaskList/>
                </div>                
            )
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


