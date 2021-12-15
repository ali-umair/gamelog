const axios = require('axios');



axios({
    url: 'https://api.igdb.com/v4/covers',
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': '3g0y6je4xqs87zkerbbwhn07ds08p6',
        'Authorization': 'Bearer 0s4tl8fzig62mj4ww01l6u1e5r22gm',
    },
    data: "fields image_id, url;limit 50;offset 0;"
})
    .then(response => {
        // dataHandler(response.data);
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    })

// function dataHandler(data) {
//     const h1 = document.querySelectorAll('h1');
//     h1[0].textContent = data[0].url;
// }