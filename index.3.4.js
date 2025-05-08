const express = require('express');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            <label>Username: <input type="text" name="username" /></label><br/>
            <label>Password: <input type="password" name="password" /></label><br/>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send(`Username: ${username}, Password: ${password}`);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
