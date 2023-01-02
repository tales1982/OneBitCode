const Author = require("./Author");

const jhon = new Author("John-Doe")

const post = jhon.writePost("Titulo do post", "lorem ipsum dolor sic...")

post.addComment("Tales lima" , "testando cometario")
post.addComment("Thoma", "Theo limz de paula")

console.log(jhon)
console.log(post);