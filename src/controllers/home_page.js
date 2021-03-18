const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '{version}',
  authenticator: new IamAuthenticator({
    apikey: '{apikey}',
  }),
  serviceUrl: '{url}',
});

//Método para render de la página del Adder
exports.renderHomePage = (req, res) => {
    res.render("index");
}

exports.sendData = (req, res) => {
    console.log(req.body)
    res.render("index", {
        response:req.body.entry
    });
}