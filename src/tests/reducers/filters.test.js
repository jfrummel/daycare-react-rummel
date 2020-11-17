import filtersReducer from '../../reducers/filters';


test("returns default state upon initialization", () => {
    const result = filtersReducer(undefined, { type: "@@INIT" });
    expect(result).toEqual({ text: "" });
});

test("sets text for filter", () => {
    const result = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "Test" });
    expect(result.text).toBe("Test");
});