import express from 'express';

const app = express();
let port = 4000;

app.listen(
        port, () => console.log('Server is running on Port: ', port)
    );