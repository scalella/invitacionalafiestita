const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve (__dirname, "../public")


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000, () =>
    console.log('aca me ando')
    );