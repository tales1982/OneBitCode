//Exiter 4 diferente tipos de export vamos ver as 4 formas.(esmodeles)
//=======1° Modo Exporte Nomeado=======
//OBS lembrando que tenho que ir no meu html e adcionar o (type="module")
import { inline } from "./inline.js";//Aqui sou obligado a usar o mesmo nome MAIS e possivel renomer tambe usando (as) exeplo (inline as novoNome)
inline()

//======2° Modo Export Default,  OBS so posso ter um por arquivo =====
import line from "./inline.js";
line()//com o exporte default posso altera o nome se presisar quer nao vou ter conflito.

//======3° Modo Export nao inmine
import { group } from "./no-inline.js";
group()

//======4° Modo Export default nao inline

import exportDefault from "./no-inline.js";
exportDefault()
