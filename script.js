function add() {
    var myInput1 = Number(userInput1.value);
    var myInput2 = Number(userInput2.value);
    table1.innerHTML = "";

    for(i = 1; i <= myInput1; i++) {
        var add = `<tr class="border border-black">`;
        for (j = 1; j <= myInput2; j++) {
            add += `<td class="border border-black">${j} + ${i} = ${j+i}</td>`;
        }
        add += "</tr>";
        table1.innerHTML += add;

        userInput1.value = "";
        userInput2.value = "";
    }

}

function subtract() {
    var myInput1 = Number(userInput1.value);
    var myInput2 = Number(userInput2.value);
    table1.innerHTML = "";

    for(i = 1; i <= myInput1; i++) {
        var subtract = `<tr class="border border-black">`;
        for (let j = 1; j <= myInput2; j++) {
            subtract += `<td class="border border-black">${j} - ${i} = ${j-i}</td>`;
        }
        subtract += "</tr>";
        table1.innerHTML += subtract;

        userInput1.value = "";
        userInput2.value = "";
    }
    
}

function multiply() {
    var myInput1 = Number(userInput1.value);
    var myInput2 = Number(userInput2.value);
    table1.innerHTML = "";

    for(i = 1; i <= myInput1; i++) {
        var multiply = `<tr class="border border-black">`;
        for (let j = 1; j <= myInput2; j++) {
            multiply += `<td class="border border-black">${j} x ${i} = ${j*i}</td>`;
        }
        multiply += "</tr>";
        table1.innerHTML += multiply;

        userInput1.value = "";
        userInput2.value = "";
    }
    
}

function divide() {
    var myInput1 = Number(userInput1.value);
    var myInput2 = Number(userInput2.value);
    table1.innerHTML = "";

    for(i = 1; i <= myInput1; i++) {
        var divide = `<tr class="border border-black">`;
        
        for (let j = 1; j <= myInput2; j++) {
            divide += `<td class="border border-black">${j} / ${i} = ${(j/i).toFixed(2)}</td>`;
        }
        divide += "</tr>";
        table1.innerHTML += divide;

        userInput1.value = "";
        userInput2.value = "";
    }
    
}
