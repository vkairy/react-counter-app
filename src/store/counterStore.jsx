import { createStore } from 'redux';

const initialState = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
    { id: 6, value: 0 },
    { id: 7, value: 0 },
    { id: 8, value: 0 },
    { id: 9, value: 0 },
    { id: 10, value: 0 },
];

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
        case 'DEC': {
            let delta = 1;
            if (action.type === 'DEC') {
                // cannot decrement if it's already zero
                if (state.find(counter => counter.id === action.id).value === 0) {
                    return state;
                }
                delta = -1;
            }

            // items deep clone
            const newState = state.map(counter => ({ ...counter }));
            newState.find(counter => counter.id === action.id).value += delta;
            return newState;
        }
        case 'DEL':
            return state.filter(counter => counter.id !== action.id);
        default:
            return state;
    }
};

const counterStore = createStore(counterReducer);

export default counterStore;