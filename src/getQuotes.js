// const quotes = [
//     {
//         quote: 'Quote 1',
//         author: 'Author 1',
//         category: 'Category 1'
//     },
//     {
//         quote: 'Quote 2',
//         author: 'Author 2',
//         category: 'Category 2'
//     }
// ]



// const axios = require('axios');

import axios from 'axios'


// const config = {
//     headers: { "Ocp-Apim-Subscription-Key": "678568ac83d64623a758aa22e9089299" },
//     transformResponse: response => response,
// }

const url = 'https://www.balldontlie.io/api/v1/players'

export default async () => {
    const { data } = await axios.get(url);

    // console.log(data);
    return data;
}

