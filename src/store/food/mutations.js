export default {
    addItem(state, { foodType, item }) {
        state[foodType].push(item);
    },

    deleteItem(state, { foodType, index }) {
        state[foodType].splice(index, 1);
    },

    pickItem(state, { foodType, index }) {
        state[foodType][index].lastPicked = new Date();
        state.chosenItems = {
            ...state.chosenItems,
            [foodType]: state[foodType][index],
        };
    },

    resetChosen(state) {
        state.chosenItems = {};
    },
};
