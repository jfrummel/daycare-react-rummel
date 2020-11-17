import customerReducer from '../../reducers/customers';
import { customers } from '../fixtures/customers';

// Set default state
test("sets default state upon initialization", () => {
    const result = customerReducer(undefined, { type: "@@INIT" });
    expect(result).toEqual([]);
});


// Add a customer
test("adds a customer to array", () => {
    const customer = {
        firstName: "Gracyn",
        lastName: "Rummel",
        numOfChildren: 3,
        hourlyRate: 1.25
    };
    const result = customerReducer(customers, { type: "ADD_CUSTOMER", customer });
    expect(result).toEqual([...customers, customer]);
});

// Remove a customer 
test("removes a customer with valid id", () => {
    const result = customerReducer(customers, { type: "REMOVE_CUSTOMER", id: customers[1].id });
    expect(result).toEqual([customers[0], customers[2]]);
});

test("removes a customer with an invalid id", () => {
    const result = customerReducer(customers, { type: "REMOVE_CUSTOMER", id: "m" });
    expect(result).toEqual(customers);
});

// Edit a customer
test("edits a customer with valid id", () => {
    const updates = { hourlyRate: 25 };
    const result = customerReducer(customers, { type: "EDIT_CUSTOMER", id: customers[2].id, updates })
    expect(result[2].hourlyRate).toBe(25);
});

test("returns state when editing customer with invalid id", () => {
    const updates = { hourlyRate: 25 };
    const result = customerReducer(customers, { type: "EDIT_CUSTOMER", id: "a", updates });
    expect(result).toEqual(customers);
});