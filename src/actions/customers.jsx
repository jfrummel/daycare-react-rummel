import { v4 as uuidv4 } from 'uuid';

//  Customers action generators

export const addCustomer = ({ firstName = "", lastName = "", numOfChildren = 0, hourlyRate = 0 } = {}) => ({
    type: "ADD_CUSTOMER",
    customer: {
        id: uuidv4(),
        firstName,
        lastName,
        numOfChildren,
        hourlyRate
    }
});

export const removeCustomer = ({ id } = {}) => ({
    type: "REMOVE_CUSTOMER",
    id
});

export const editCustomer = (id, updates) => ({
    type: "EDIT_CUSTOMER",
    id, updates
});