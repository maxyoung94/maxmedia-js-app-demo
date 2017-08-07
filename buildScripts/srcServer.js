import express from 'express';
import path from 'path';
import open from 'open';

// import webpack and the config file for use
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.get('/users', function(req, res) {
    // hard coding for simplicity, pretend this hits a real database
    res.json([
        {"id": 1, "firstName": "Max", "lastName": "Young", "email":"maxyoung1994@gmail.com"},
        {"id": 2, "firstName": "Bob", "lastName": "Young", "email":"bob@gmail.com"},
        {"id": 3, "firstName": "Tim", "lastName": "Young", "email":"tim@gmail.com"}
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
