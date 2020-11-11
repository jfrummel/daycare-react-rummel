
export const getVisibleCustomers = (customers, { text }) => {
    return customers.filter((customer) => {
        const textMatch = customer.lastName.toLowerCase().includes(text.toLowerCase());

        return textMatch;
    });
};