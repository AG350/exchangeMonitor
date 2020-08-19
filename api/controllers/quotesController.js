
const axios = require('axios');
const nameHandler = require('./nameController');
const key = "4822|Zd8NKyDNmmji8eEaUfLUqrf01TAG5DKp"
//nameHandler().find(name=>name.code == "USD").name;


module.exports = {
    dollarQuote: async (req, res) => {
        let data = await axios({
            method: 'get',
            url: `http://api.devises.zone/v1/quotes/USD/ARS/json?quantity=1&key=${key}`,
            responseType: 'json'
        })
        .then(function (response) {
            return response.data;
        });
        res.send(data);
    },
    euroQuote: async (req, res) => {
        let data = await axios({
            method: 'get',
            url: `http://api.devises.zone/v1/quotes/EUR/ARS/json?quantity=1&key=${key}`,
            responseType: 'json'
        })
        .then(function (response) {
            return response.data;
        });
        res.send(data);
    },
    realQuote: async (req, res) => {
        let data = await axios({
            method: 'get',
            url: `http://api.devises.zone/v1/quotes/BRL/ARS/json?quantity=1&key=${key}`,
            responseType: 'json'
        })
        .then(function (response) {
            return response.data;
        });
        res.send(data);
    },
    selectedQuote: async (req, res) => {
        let target = req.params.target;
        let data = await axios({
            method: 'get',
            url: `http://api.devises.zone/v1/quotes/${target}/ARS/json?quantity=1&key=${key}`,
            responseType: 'json'
        })
        .then(function (response) {
            return response.data;
        });
        res.send(data);
    }
}