const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        course: "Omnistack",
        message: "hello world"
    });
})

app.listen(3333);
