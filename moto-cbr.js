const cbr = require('./phone');

class cbr250 {
    constructor(placa){
        return new cbr(placa, 'Honda', 'cbr', 'deportiva', 'mecanica', 250, 'roja');
    }
}

module.exports = cbr250;