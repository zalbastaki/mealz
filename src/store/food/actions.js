export default {
    addItem(context, { foodType, item }) {
        context.commit('addItem', { foodType, item });
    },

    deleteItem(context, { foodType, index }) {
        context.commit('deleteItem', { foodType, index });
    },

    pickItem(context, { foodType, index }) {
        context.commit('pickItem', { foodType, index });
    },

    resetChosen(context) {
        context.commit('resetChosen');
    },
};
