import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCustomer, removeCustomer } from '../actions/customers';
import CustomerForm from './CustomerForm';

export class EditCustomer extends Component {

    onSubmit = (customer) => {
        this.props.editCustomer(this.props.customer.id, customer);
        this.props.history.push("/customer_list");
    };

    onRemove = () => {
        this.props.removeCustomer({ id: this.props.customer.id });
        this.props.history.push("/customer_list");
    }

    render() {
        return (
            <div>
                <h3>Edit Customer</h3>
                <CustomerForm
                    customer={this.props.customer}
                    buttonText="Save Expense"
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onRemove}
                >
                    Remove
        </button>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    editCustomer: (id, customer) => dispatch(editCustomer(id, customer)),
    removeCustomer: (customer) => dispatch(removeCustomer(customer))
});

const mapStateToProps = (state, props) => {
    return {
        customer: state.customers.find((customer) => customer.id === props.match.params.id)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCustomer);