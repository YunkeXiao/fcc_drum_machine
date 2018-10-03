import React from 'react';

export default class DrumButtons extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        // console.log("the value of this.props.power is " + this.props.power);
        let buttons = [];
        const KEYPAD = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
        for (let i = 0; i < 9; i++) {
            buttons.push(<input type='button' value={KEYPAD[i]} id={KEYPAD[i]} disabled={!this.props.power} />)
        }
        return (
            <React.Fragment>
                <div id='drumButtons'>
                    {buttons}
                </div>
                <div id='soundID'>

                </div>
            </React.Fragment>
        );
    };
}

