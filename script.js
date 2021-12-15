fetch("https://api.igdb.com/v4/covers", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': '3g0y6je4xqs87zkerbbwhn07ds08p6',
        'Authorization': 'Bearer 0s4tl8fzig62mj4ww01l6u1e5r22gm',
    },
    data: "fields image_id, url;limit 50;offset 0;"
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    })