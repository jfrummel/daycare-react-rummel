//  customers default state

const customerDefaultState = [];

const customerReducer = (state = customerDefaultState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return [...state, action.customer];
        case "REMOVE_CUSTOMER":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_CUSTOMER":
            return state.map((customer) => {
                if (customer.id === action.id) {
                    return { ...customer, ...action.updates };
                } else {
                    return customer
                }
            });
        default:
            return state;
    }
};

export default customerReducer;