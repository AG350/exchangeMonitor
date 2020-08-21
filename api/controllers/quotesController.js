
const axios = require('axios');
const nameHandler = require('./nameController');

const key = "4822|Zd8NKyDNmmji8eEaUfLUqrf01TAG5DKp"

function getQuote(target, name) {
    return axios({
        method: 'get',
        url: `http://api.devises.zone/v1/quotes/${target}/ARS/json?quantity=1&key=${key}`,
        responseType: 'json'
    })
    .then(function (response) {
        let result = {
            name: name,
            precio: response.data.result.value

        }
        return result;
    });
}

module.exports = {
    dollarQuote: async (req, res) => {
        let data = await getQuote("USD","dolar")
        res.send(data);
    },
    euroQuote: async (req, res) => {
        let data = await getQuote("EUR","euro")
        res.send(data);
    },
    realQuote: async (req, res) => {
        let data = await getQuote("BRL","real")
        res.send(data);
    },
    selectedQuote: async (req, res) => {
        let target = req.params.target;
        let name = nameHandler().find(name=>name.code == target).name;
        let data = await getQuote(target,name)
        res.send(data);
    }
}