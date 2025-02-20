const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\hello.html');
    console.log('Главная страница');
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '\\404.html');
    console.log('Ошибка 404');
});

app.listen(5000, () => {
    console.log('Сервер работает http://localhost:5000');
});