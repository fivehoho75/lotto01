import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './router';
import models from './models';

const app = express();
let port = 4000;

app.use( morgan('dev') );
app.use( bodyParser.json() );

app.use('/api', api);

/* handle error */
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => 
    console.log('Server is running on Port: ', port));