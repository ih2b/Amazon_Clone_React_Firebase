const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I71vTDsDJ47JDKBO9z6EcZizUHwhvfHoTyBOFKSIoTxhE9svfpR0rQPwZs0XvjeoPAc7jNKVeAoxNNPN1KaiwNf00wAUoO1eT')

//API
//app config
const app =express();
//middlewares
app.use(cors({ origin: true}));
app.use(express.json());
//api routes 
app.get('/',(request,response) => response.status(200).send('heyy'))

app.post('/payments/create', async (request,response)=>{
    const total =request.query.total;
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret:  paymentIntent.client_secret,
    })
})
//listen command
exports.api =functions.https.onRequest(app);

//http://localhost:5001/cloneamazon/us-central1/api