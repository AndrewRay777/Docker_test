const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>🚀 CI/CD в Docker на Windows успешно работает! 🚀</h1>');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
