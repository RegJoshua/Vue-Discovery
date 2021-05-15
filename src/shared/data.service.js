//import * as axios from 'axios';

// const parseList = (response) => {
//     if(response.status !== 200) {
//         throw Error(response.message);
//     }   
//     if(!response.data) {
//         return [];
//     }
//     let list = response.data;
//     if(typeof list !== 'object') {
//         list = []
//     }

//     return list;
// }

const dataArr = [
    {referenceId: 802323, sequenceId: 0, filePath: 'C:/test/path/here'},
    {referenceId: 802323, sequenceId: 1, filePath: 'C:/test/path/here2'},
    {referenceId: 802323, sequenceId: 2, filePath: 'C:/test/path/here3'},
    {referenceId: 802323, sequenceId: 3, filePath: 'C:/test/path/here4'},
    {referenceId: 802344, sequenceId: 1, filePath: 'C:/test/path/802344'},
    {referenceId: 802353, sequenceId: 1, filePath: 'C:/test/path/802353'},
    {referenceId: 802363, sequenceId: 1, filePath: 'C:/test/path/802363'},
    {referenceId: 802383, sequenceId: 1, filePath: 'C:/test/path/802383'},
    {referenceId: 802373, sequenceId: 1, filePath: 'C:/test/path/802373'},
]

const getRecordDataFromDB = async function(id) {
    try {
        // const url = 'apiurlwoulgohere';
        // const response = await axios.get(url);
        // const data = parseList(response);
        // return data.response;

        //will return dummy data for now
        return dataArr.filter(x => x.referenceId == id);
    }
    catch (error) {
        return '';
    }
}

export const dataService = {
    getRecordDataFromDB,
}