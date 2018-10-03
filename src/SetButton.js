import React from 'react';

export default class SetButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.kit === 'Heater Kit' ? this.props.handleKit('Piano Kit') : this.props.handleKit('Heater Kit');
    }

    render() {
        return (
            <input type='button' value={this.props.kit} onClick={this.handleClick}/>
        )
    }
}