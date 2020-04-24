// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0,
        }
    }

    incrementClicker = () => {
        this.setState(prev => ({
            timesClicked: prev.timesClicked + 1
        }))
    }

    render() {
        return(
            <button onClick={this.incrementClicker}>{this.state.timesClicked}</button>
        )
    }


}