const express = require('express');
const app = express();
let port = 3000;
const Jeux = require('./data/jeuxvideos.js');
const _ = require('lodash');
const { uuid } = require('uuidv4');
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.use('/assets', express.static('./client/assets'));
app.use('/pages', express.static('./client/assets/pages'))
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/assets/index.html')
})

app.get('/jeux', (req, res) => {
    res.send(Jeux);
})

app.get('/jeux/:id', (req, res) => {
    let id = req.params.id;
    let jeu = _.find(Jeux, (o) => {
        return o._id == id;
    });
    res.send(jeu);
});

app.put('/jeux/:id', (req, res) => {
    let id = req.params.id;
    let index = _.findIndex(Jeux, (o) => {
        return o._id == id;
    });
    Jeux[index] = req.body
    res.sendStatus(200);
})

app.post('/jeux', (req, res) => {
    let newJeux = req.body;
    newJeux._id = uuid();
    Jeux.push(newJeux);
    res.sendStatus(200);
})

app.delete('/jeux/:id', (req, res) => {
    let id = req.params.id;
    let index = _.findIndex(Jeux, (o) => {
        return o._id == id;
    });
    Jeux.splice(index, 1);
    res.sendStatus(200);
})