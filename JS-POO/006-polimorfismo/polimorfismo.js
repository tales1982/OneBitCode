class Cliente {
    drink(){
        console.log("O Cliente nao bebe.")
    }

}

class ClinteTales extends Cliente{
    drink(){console.log("Tales esta bebendo cerveja.")}
    
}

const talesDrink = new ClinteTales()

talesDrink.drink()