const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const GETDATA_URL = process.env.GETDATA_URL || "http://localhost";

app.get('/', (req, res) => {
    res.send('Hello World!' + GETDATA_URL);
});

app.listen(PORT, () => {
    console.log('Example app listening on port port!');
});

