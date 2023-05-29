interface SpaceShip {
    name: string;
    pilot: string;
    crewLimit: number;
    crew: string[];
    inMission: boolean;
  }
  
  const spaceShips: SpaceShip[] = []; // Array para armazenar as naves registradas
  
  function saveSpaceShip(): void {
    const name: string = prompt("Digite o nome da nave:");
    const pilot: string = prompt("Digite o nome do piloto:");
    const crewLimit: number = parseInt(prompt("Digite o limite da tripulação:"));
  
    const spaceShip: SpaceShip = {
      name: name,
      pilot: pilot,
      crewLimit: crewLimit,
      crew: [],
      inMission: false,
    };
  
    spaceShips.push(spaceShip);
  }
  
  function addCrewMember(spaceShipName: string, crewMember: string): void {
    const spaceShip: SpaceShip | undefined = spaceShips.find(
      (ship) => ship.name === spaceShipName
    );
  
    if (spaceShip) {
      if (spaceShip.crew.length < spaceShip.crewLimit) {
        spaceShip.crew.push(crewMember);
        console.log(`${crewMember} adicionado à tripulação da nave ${spaceShipName}.`);
      } else {
        console.log(`Limite da tripulação da nave ${spaceShipName} foi atingido.`);
      }
    } else {
      console.log(`Nave ${spaceShipName} não encontrada.`);
    }
  }
  
  function sendMission(spaceShipName: string): void {
    const spaceShip: SpaceShip | undefined = spaceShips.find(
      (ship) => ship.name === spaceShipName
    );
  
    if (spaceShip) {
      if (!spaceShip.inMission) {
        const crewSizeThreshold: number = Math.floor(spaceShip.crewLimit / 3);
        if (spaceShip.crew.length >= crewSizeThreshold) {
          spaceShip.inMission = true;
          console.log(`Nave ${spaceShipName} enviada em uma missão.`);
        } else {
          console.log(
            `A tripulação da nave ${spaceShipName} não atende aos requisitos mínimos para a missão.`
          );
        }
      } else {
        console.log(`Nave ${spaceShipName} já está em uma missão.`);
      }
    } else {
      console.log(`Nave ${spaceShipName} não encontrada.`);
    }
  }
  
  function listSpaceShips(): void {
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
    } else {
      console.log("Nenhuma nave registrada.");
    }
  }
  