const CBR  = require('./moto-cbr');

class motofactory {
    create(type, placa){
        switch(type){
            
            case 'moto':
                return new CBR(placa);

            default: {
                console.log('motorcicle not found.');
            }
        }
    }
}
module.exports = new motofactory;