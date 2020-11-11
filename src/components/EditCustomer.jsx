import React from 'react';

const EditCustomer = (props) => (
    <div>
        <h3>Customer with id: {props.match.params.id}</h3>
    </div>
);

export default EditCustomer;