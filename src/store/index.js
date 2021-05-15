import Vue from 'vue';
import Vuex from 'vuex';
import { dataService } from '../shared';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        test: 'test',
        data: [],
    },
    mutations: {
        GET_RECORD_DATA(state, data) {
            state.data = data;
        },
        CLEAR_DATA(state, data) {
            state.data = data;
        }
    },
    actions: {
        async getRecordDataFromDB({commit}, id) {
            const data = await dataService.getRecordDataFromDB(id);
            commit('GET_RECORD_DATA', data);
        },
        async clearData({commit}, data) {
            data = [];
            commit('CLEAR_DATA', data);
        }
    },
    modules: {

    }
});