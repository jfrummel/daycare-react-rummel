import { getVisibleCustomers } from '../../selectors/customers';
import { customers } from '../fixtures/customers';

test("returns all customers with  default text values", () => {
    const result = getVisibleCustomers(customers, { text: "" });
    expect(result).toEqual(customers);
});

test("returns correct customers with text values", () => {
    const result = getVisibleCustomers(customers, { text: "X" });
    expect(result).toEqual([customers[0]]);
});
test("returns no customers with no matching text values", () => {
    const result = getVisibleCustomers(customers, { text: "8" });
    expect(result).toEqual([]);
});