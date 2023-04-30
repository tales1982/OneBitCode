const user = {
  name: "Tales Lima",
  email: "tales_lima_1982@hotmail.com",
  friends: [
    {
      name: "Mabio",
      adress: {
        street: "Rue Libertè",
        number: 89,
      },
    },
    {
      name: "Junior",
      adress: {
        street: "Route de la pax",
        number: 07,
        
      },
    },
  ],
  age:41,
  phone:{
    coutryCode: +352,
    number: 661124040
  }
};

//console.log(user.friends[0].phone.ddd);
console.log(user?.friends[0]?.phone?.ddd)

//outro exemplo
console.log(user?.brothers?.length)//dessa maneira nao da erro vai dar underfined mesmo que nao existar meu elemento

//outro exemplo
console.log(user.brothers?.[5].name)