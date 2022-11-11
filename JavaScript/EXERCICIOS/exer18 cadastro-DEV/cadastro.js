function createLabel(text, htmlFor){
    const label = document.createElement('label');
    label.htmlFor = htmlFor;
    label.text = text;
    return label;
}

function createInput(id, value, name, type, placeholder = ''){
    const input = document.createElement('input');
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    return input
}
 const addTechBtn = document.querySelector('#addTechBtn')
 const form = document.querySelector('#devForm');
 const developers = [];
 let inputRows = 0



addTechBtn.addEventListener('click', function(ev){
    const stackInput = document.querySelector("#stackInputs");

    const newRow = document.createElement('li');
    const rowIndex = inputRows;
    rowIndex++;
    newRow.id = 'inputRows-' + rowIndex;
    newRow.className = 'inputRow';

    const techNameLabel = createLabel('Nome','techName-' + rowIndex);
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    newRow.append(techNameLabel,techNameInput)
    stackInput.appendChild(newRow)
})