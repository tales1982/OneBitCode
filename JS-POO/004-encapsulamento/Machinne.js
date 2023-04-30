class Machinne{
    #serie
    #notPass
    constructor(yammar){
        this.marque = yammar.marque
        this.model = yammar.model
        this.#serie  = yammar.serie
        this.accesoire = yammar.accesoire
        this.#notPass = 206
    }

    checkPass(password){
        if(this.#notPass === password){
            return "serie: " + this.#serie
        }
    }
    
}

const yammar = {
    marque:"Yammar",
    model:"Vio50",
    serie:12345678,
    accesoire:"3-Godets",
    
}


const yammar2 = {
  marque: "Yammar",
  model: "Vio26",
  serie: 1212121,
  accesoire: "1-Godets",
};


const machineDonne = new Machinne(yammar);
const machineDonne2 = new Machinne(yammar2)


console.log(machineDonne,machineDonne.checkPass(206))

console.log(machineDonne2,machineDonne2.checkPass(206));