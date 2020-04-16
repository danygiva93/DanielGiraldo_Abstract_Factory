const moto = require('./moto');

class kawasaki {
    constructor(placa){
        return new moto(placa, 'kawasaki', 'er6n', 'deportiva', 'mecanica', 650, 'negra');
    }
}

module.exports = kawasaki;