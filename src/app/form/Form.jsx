import React, { Component } from 'react';
import Input from './Input.jsx';

class Form extends Component {

    listInputs = [
        "Nombre", "Apellido", "Telefono", "Direccion"
    ]

    render() {
        return (
            <form>
                {
                    this.listInputs.map((element, index) => (
                        <Input key={index} label={element} />
                    ))
                }
            </form>
        )
    }
}

export default Form;