import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date().toLocaleTimeString(),
            dayOfWeek: getDayOfWeek(),
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.updateClock(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    updateClock() {
        console.log("update clock");
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }

    render() {
        return (
            <div className="time">
                <p>{this.state.time}</p>
                <p class="smallDay">It's {this.state.dayOfWeek}</p>
            </div>
        )
    }
}

function getDayOfWeek() {
    var day = new Date().getDay();

    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'Not sure what day it is!';
    }
}

export default Clock;