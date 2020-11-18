import React, { Component } from 'react';
import CustomerForm from './CustomerForm';
import { connect } from 'react-redux';
import { addCustomer } from '../actions/customers';

export class AddCustomer extends Component {

    onSubmit = (customer) => {
        this.props.addCustomer(customer);
        this.props.history.push('/customer_list');
    };

    render() {
        return (
            <div>
                <h2>Add a new customer</h2>
                <CustomerForm
                    buttonText="Add Customer"
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}




const mapDispatchToProps = (dispatch) => ({
    addCustomer: (customer) => dispatch(addCustomer(customer))
});

export default connect(undefined, mapDispatchToProps)(AddCustomer);