class User {
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    checkLoguin(email2 = "jose@hotmail", senha =170465){
        if(this.password === senha && this.email === email2){
            console.log("Loguin bem sucedido")
        }else{
            console.log("Senha errada")
        }

    }
}

const tales = new User("Tales Lima","jose@hotmal",170465)

console.log(tales, tales.checkLoguin("jose@hotmail"));//posso passar o paramentro ou nao se eu quizer posso pre definir la em cima quando declaro.
