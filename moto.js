class moto{
    constructor(
        paca='WCR87D',
        model='cbr',
        tipo='deportiva',
        transmision='manual',
        cilindraje=250,
        color='rojo'
        
    ){
        this.paca = paca;
        this.configuration = {
            model,
            transmision,
            tipo,
            cilindraje,
            color,
            paca
        }
    }

    dial(num){
        console.log(num);
    }

    displayConfig(){
        console.log(this.configuration);
    }
}

module.exports = moto;