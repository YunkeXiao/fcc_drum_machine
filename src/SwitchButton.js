import React from 'react';


export default class SwitchButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.handlePower(!this.props.power);
    }

    render() {
        return (
            <input type='button' value={this.props.power ? 'ON' : 'OFF'} onClick={this.handleClick}/>
        )
    }
}