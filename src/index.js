import React from 'react';
import ReactDOM from 'react-dom';
import DrumButtons from './DrumButtons.js';
import SwitchButton from './SwitchButton.js';
import SetButton from './SetButton.js';

class DrumBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            power: true,
            kit: 'Heater Kit'
        };
        this.handlePower = this.handlePower.bind(this);
        this.handleKit = this.handleKit.bind(this);
    }

    handlePower(value) {
        this.setState({power: value});
    }

    handleKit(value) {
        this.setState({kit: value});
    }

    render() {
        return (
            <div>
                <DrumButtons power={this.state.power}/>
                <SwitchButton handlePower={this.handlePower} power={this.state.power}/>
                <SetButton handleKit={this.handleKit} kit={this.state.kit}/>
            </div>
        )
    }
}

ReactDOM.render(<DrumBox/>, document.getElementById('root'));
