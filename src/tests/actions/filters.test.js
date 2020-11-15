import { setTextFilter } from '../../actions/filters';

// setTextFilter action generator

test("returns set text filter action object", () => {
    const result = setTextFilter("Test");
    expect(result).toEqual({
        type: "SET_TEXT_FILTER",
        text: "Test"
    })
});

test("returns set text filter action object with default values", () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
});