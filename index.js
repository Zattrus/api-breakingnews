const express = require('express');
const userRoute = require('./src/routes/user.routes')

const port = "http://localhost:3000";

const app = express();
app.use(express.json());
app.use('/user', userRoute)

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`))