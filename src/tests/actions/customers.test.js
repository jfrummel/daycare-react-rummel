import { addCustomer, removeCustomer, editCustomer } from '../../actions/customers';

//  Add Customer action generator

test("returns add customer action object", () => {
    const newCustomer = {
        firstName: "Gracyn",
        lastName: "Rummel",
        numOfChildren: 3,
        hourlyRate: 1.25

    }
    const result = addCustomer(newCustomer);
    expect(result).toEqual({
        type: "ADD_CUSTOMER",
        customer:
        {
            ...newCustomer,
            id: expect.any(String)
        },
    });
});

test("returns add customer action object with default values", () => {
    const result = addCustomer();
    expect(result).toEqual({
        type: "ADD_CUSTOMER",
        customer: {
            firstName: "",
            lastName: "",
            numOfChildren: 0,
            hourlyRate: 0,
            id: expect.any(String)
        }
    });
});

// Remove customer action generator

test("returns remove customer action object", () => {
    const result = removeCustomer({ id: "123" });
    expect(result).toEqual({
        type: "REMOVE_CUSTOMER",
        id: "123"
    });
});

//  Edit customer action generator

test("returns edit customer action object", () => {
    const result = editCustomer("123", { description: "test" });
    expect(result).toEqual({
        type: "EDIT_CUSTOMER",
        id: "123",
        updates: {
            description: "test"
        }
    });
});