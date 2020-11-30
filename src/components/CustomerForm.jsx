import React, { Component } from 'react';



class CustomerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.customer ? props.customer.firstName : "",
            lastName: props.customer ? props.customer.lastName : "",
            numOfChildren: props.customer ? props.customer.numOfChildren : 0,
            hourlyRate: props.customer ? (props.customer.hourlyRate.toString()) : "",
            error: ""
        }
    }

    onFirstNameChange = (e) => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));
    };

    onLastNameChange = (e) => {
        const lastName = e.target.value;
        this.setState(() => ({ lastName }));
    };

    onNumChildrenChange = (e) => {
        const numOfChildren = e.target.value;
        this.setState(() => ({ numOfChildren }));
    };

    onHourlyRateChange = (e) => {
        const hourlyRate = e.target.value;
        if (!hourlyRate || hourlyRate.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ hourlyRate }));
        }
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.firstName || !this.state.lastName) {
            this.setState(() => ({ error: "First and Last Name Required" }))
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                numOfChildren: this.state.numOfChildren,
                hourlyRate: parseFloat(this.state.hourlyRate)
            });
        };
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="text"
                    value={this.state.firstName}
                    placeholder="First Name"
                    onChange={this.onFirstNameChange}
                    autoFocus
                />
                <input
                    type="text"
                    value={this.state.lastName}
                    placeholder="Last Name"
                    onChange={this.onLastNameChange}
                />
                <input
                    type="number"
                    value={this.state.numOfChildren}
                    placeholder="Number of Children"
                    onChange={this.onNumChildrenChange}
                />
                <input
                    type="text"
                    value={this.state.hourlyRate}
                    placeholder="Hourly Rate"
                    onChange={this.onHourlyRateChange}
                />
                <button>{this.props.buttonText}</button>
            </form>
        );
    }
}

export default CustomerForm;