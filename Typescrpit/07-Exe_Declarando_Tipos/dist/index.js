const spaceShips = []; // Array para armazenar as naves registradas
function saveSpaceShip() {
    const name = prompt("Digite o nome da nave:");
    const pilot = prompt("Digite o nome do piloto:");
    const crewLimit = parseInt(prompt("Digite o limite da tripulação:"));
    const spaceShip = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false,
    };
    spaceShips.push(spaceShip);
}
function addCrewMember(spaceShipName, crewMember) {
    const spaceShip = spaceShips.find((ship) => ship.name === spaceShipName);
    if (spaceShip) {
        if (spaceShip.crew.length < spaceShip.crewLimit) {
            spaceShip.crew.push(crewMember);
            console.log(`${crewMember} adicionado à tripulação da nave ${spaceShipName}.`);
        }
        else {
            console.log(`Limite da tripulação da nave ${spaceShipName} foi atingido.`);
        }
    }
    else {
        console.log(`Nave ${spaceShipName} não encontrada.`);
    }
}
function sendMission(spaceShipName) {
    const spaceShip = spaceShips.find((ship) => ship.name === spaceShipName);
    if (spaceShip) {
        if (!spaceShip.inMission) {
            const crewSizeThreshold = Math.floor(spaceShip.crewLimit / 3);
            if (spaceShip.crew.length >= crewSizeThreshold) {
                spaceShip.inMission = true;
                console.log(`Nave ${spaceShipName} enviada em uma missão.`);
            }
            else {
                console.log(`A tripulação da nave ${spaceShipName} não atende aos requisitos mínimos para a missão.`);
            }
        }
        else {
            console.log(`Nave ${spaceShipName} já está em uma missão.`);
        }
    }
    else {
        console.log(`Nave ${spaceShipName} não encontrada.`);
    }
}
function listSpaceShips() {
    if (spaceShips.length > 0) {
        console.log("Naves registradas:");
        spaceShips.forEach((spaceShip) => {
            console.log(`- ${spaceShip.name}`);
            console.log(`  Piloto: ${spaceShip.pilot}`);
            console.log(`  Tripulação: ${spaceShip.crew.join(", ")}`);
            console.log(`  Limite da tripulação: ${spaceShip.crewLimit}`);
            console.log(`  Em missão: ${spaceShip.inMission}`);
            console.log("---------------------------------------");
        });
    }
    else {
        console.log("Nenhuma nave registrada.");
    }
}
