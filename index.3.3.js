const express = require('express');
const app = express();
const port = 3000;

app.get('/factorial', (req, res) => {
    const number = req.query.number;
    if (!number || isNaN(number)) {
        return res.status(400).send('Invalid or missing number');
    }
    res.redirect(`/factorial/${number}`);
});

// 실제 팩토리얼 계산 라우터
app.get('/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number);

    if (isNaN(number) || number < 0) {
        return res.status(400).send('Invalid number');
    }

    // 팩토리얼 계산
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    res.send(`The factorial of ${number} is ${result}`);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
