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