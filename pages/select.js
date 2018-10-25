import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];



class SelectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectOption: options[0]
        };
    }
    handleOnChange = (selectOption) => {
        this.setState({
            selectOption
        });
    }
    render() {
        const {selectOption} = this.state;
        return (
            <Select  placeholder="No option is selected" value = {selectOption} onChange = {this.handleOnChange} options = {options}/>
        );
    }
}

export default SelectComponent;