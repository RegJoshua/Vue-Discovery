<template>
    <div class='discovery-wrapper'>
        <div class='header-row'>
            <input 
            v-model="inputText"
            type="text">
            <button @click="getRecordData()" class='search-button'>Search</button>
            <button @click="clearTable()" class='clear-button'>Clear</button>
        </div>
        <div class='table-data'>
            <table v-if="data.length > 0" id="discovery-table">
                <thead>
                <tr>
                    <th>Row Id</th>
                    <th>Reference Id</th>
                    <th>Sequence #</th>
                    <th>File Path</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in data" :key="data.filePath">
                        <td>{{index}}</td>
                        <td>{{data.referenceId}}</td>
                        <td>{{data.sequenceId}}</td>
                        <td ><a href="https://www.google.com" target="_blank">{{data.filePath}}</a></td>
                    </tr>
                </tbody>
            </table>
            <div v-else-if="hasSearched === true">
                <p>No matching Reference Id for that search.</p>
            </div>
            <div v-else>
                <p>Please enter a Reference Id to search records.</p>
            </div>
        </div>      
    </div>
</template>

<script>
import store from '@/store';
import { mapState, mapActions } from 'vuex';

export default {
    data: function() {
        return {
            count: 0,
            inputText: '',
            hasSearched: false,
            dataObject: [
                {referenceId: 802323, sequenceId: 0, filePath: 'C:/test/path/here'},
                {referenceId: 802323, sequenceId: 1, filePath: 'C:/test/path/here2'},
                {referenceId: 802323, sequenceId: 2, filePath: 'C:/test/path/here3'},
                {referenceId: 802323, sequenceId: 3, filePath: 'C:/test/path/here4'},
                {referenceId: 802344, sequenceId: 1, filePath: 'C:/test/path/802344'},
                {referenceId: 802353, sequenceId: 1, filePath: 'C:/test/path/802353'},
                {referenceId: 802363, sequenceId: 2, filePath: 'C:/test/path/802363'},
                {referenceId: 802383, sequenceId: 3, filePath: 'C:/test/path/802383'},
                {referenceId: 802373, sequenceId: 4, filePath: 'C:/test/path/802373'},

            ],
            tableData: [],

        }
    },
    computed: {
        ...mapState(['data']),
    },
    async created() {
        this.tableData = this.dataObject;
    },
    methods: {
        ...mapActions(['getRecordDataFromDB']),
        async getRecordData() {
            this.hasSearched = true;
            await this.getRecordDataFromDB(this.inputText);
        },
        clearTable() {
            this.inputText = '';
            this.hasSearched = false;
            store.dispatch('clearData', []);
        }
    }
}
</script>

<style scoped>
.discovery-wrapper {
    min-height: 300px;
    margin: auto;
    position: relative;
}

table, th, td {
    border: 1px solid black;
    background-color: cyan;
    max-width: 300px;
}

.table-data p {
    border: 1px solid black;
}

#discovery-table th {
    min-width: 200px;
}

.header-row {
    max-width: 300px;
    width: 50%;
    left: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.table-data {
    width: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.search-button, .clear-button {
    margin-left: 10px;
}

</style>
