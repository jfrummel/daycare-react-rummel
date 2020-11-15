import React from 'react';
import { connect } from 'react-redux';
import { editCustomer, removeCustomer } from '../actions/customers';
import CustomerForm from './CustomerForm';

const EditCustomer = (props) => (
    <div>
        <h3>Edit Customer</h3>
        <CustomerForm
            customer={props.customer}
            buttonText="Save Expense"
            onSubmit={(customer) => {
                props.dispatch(editCustomer(props.customer.id, customer));
                props.history.push("/customer_list");
            }}
        />
        <button
            onClick={() => {
                props.dispatch(removeCustomer({ id: props.customer.id }));
                props.history.push("/customer_list");
            }}
        >
            Remove
        </button>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        customer: state.customers.find((customer) => customer.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditCustomer);