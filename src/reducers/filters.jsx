// filters reducers

// Default state

const filtersDefaultState = {
    text: ''
};

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state, text: action.text
            }
        default:
            return state;
    }
};

export default filtersReducer;