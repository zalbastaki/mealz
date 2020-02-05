import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faTimesCircle,
    faPlusCircle,
    faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default () => {
    library.add(faTimesCircle);
    library.add(faPlusCircle);
    library.add(faUndo);

    Vue.component('fa-icon', FontAwesomeIcon);
};
