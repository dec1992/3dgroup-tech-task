import express from "express";

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})

app.get("/", (req, res) => {
    const data = require('./data.json')
    console.log({ data })
    res.status(200).send(data)
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});