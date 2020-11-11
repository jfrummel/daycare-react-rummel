import React, { Component } from 'react';

class CustomerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            numOfChildren: 0,
            hourlyRate: ""
        }
    }

    onFirstNameChange = (e) => {
        this.setState(() => ({
            firstName: e.target.value
        }));
    };

    onLastNameChange = (e) => {
        this.setState(() => ({
            lastName: e.target.value
        }));
    };

    onNumChildrenChange = (e) => {
        this.setState(() => ({
            numOfChildren: e.target.value
        }));
    };

    onHourlyRateChange = (e) => {
        this.setState(() => ({
            hourlyRate: e.target.value
        }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={this.onFirstNameChange}
                />
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={this.onLastNameChange}
                />
                <input
                    type="number"
                    value={this.state.numOfChildren}
                    onChange={this.onNumChildrenChange}
                />
                <input
                    type="text"
                    value={this.state.hourlyRate}
                    onChange={this.onHourlyRateChange}
                />
                <button>Add Customer</button>
            </form>
        );
    }
}

export default CustomerForm;