const express = require('express'),
                app = express(),
                {json} = require('body-parser'),
                cors = require('cors'),
                massive = require('massive'),
                port = 3000;
                productsCtrl = require('../constollers/products_ctrl')
require('dotenv').config();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
    })
    .catch(console.log);

app.get('/api/products', productsCtrl.getAll);

app.get('/api/product/:id', productsCtrl.getOne);

app.put('/api/product/:id', productsCtrl.update);
app.post('/api/product', productsCtrl.create);
app.delete('/api/product/:id', productsCtrl.delete);

app.listen(port, console.log(`Listening to PORT: ${port}`))


