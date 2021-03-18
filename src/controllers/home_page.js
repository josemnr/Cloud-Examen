const {config} = require('../../config');
const fetch = require('node-fetch');

//Método para render de HomePage
exports.renderHomePage = (req, res) => {
    res.render("index");
}

exports.sendData = (req, res) => {
    let text = req.body.entry;
    let data = {entry: text};

    fetch(config.cloudFoundryUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', response)
        if(response.result){
            res.render("index", {
                response: JSON.stringify(response.result)
            });
        }else{
            res.render("index", {
                response: JSON.stringify(response)
            });
        }
    });
}