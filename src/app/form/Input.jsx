import React, { Component } from 'react';

class Input extends Component {


    render() {
        return (
            <label>{this.props.label}
                <input type="text" placeholder={`Escriba su ${this.props.label}`} />
            </label>
        )
    }
}

export default Input;