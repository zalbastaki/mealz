export default {
    changeDaysNoRepeat(context, daysNoRepeat) {
        context.commit('setDaysNoRepeat', parseInt(daysNoRepeat));
    },
};
