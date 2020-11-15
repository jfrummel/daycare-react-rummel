import React from 'react';
import { Link } from 'react-router-dom';

const CustomerListItem = (props) => (
    <li>
        <Link to={`edit/${props.customer.id}`}>{props.customer.firstName} {props.customer.lastName}</Link>
        <p>Number of children: {props.customer.numOfChildren}</p>
        <p>Hourly rate: ${props.customer.hourlyRate}</p>
    </li>
);

export default CustomerListItem;