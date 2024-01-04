const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/soma', (req, res) => {
    const soma = 1 + 2;

    res.json({ soma: soma });
});

app.listen(3000)