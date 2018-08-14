const express = require('express');
const questionsRouter = require('./api/routes/questions');

//Create express app
const app = express();

//Handle GET requests
app.use('/questions', questionsRouter);
app.get('/', (req, res) => res.send('Hello World!'));

//Begin listening on port
app.listen(3000, () => console.log('Example app listening on port 3000!'));
