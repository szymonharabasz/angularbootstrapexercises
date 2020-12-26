const express = require('express');
const compression = require("compression");
const nocache = require('nocache');


const app = express();
const port = 3000;

app.use(compression());
app.use(nocache());

app.get('*.*', express.static('.', {maxAge: '1y'}));
app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: '.'});
});

app.listen(port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + port);
});