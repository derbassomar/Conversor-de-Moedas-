function converter() {
    let inputReais = document.getElementById("reais");
    let resultado = document.getElementById("resultado");

  
    if (!inputReais || !resultado) {
        console.error("Erro: Elementos HTML não encontrados. Verifique os IDs no HTML.");
        return;
    }

    let reais = parseFloat(inputReais.value);

    
    if (isNaN(reais) || reais <= 0) {
        resultado.innerText = "Por favor, insira um valor válido.";
        resultado.style.color = "red";
        return;
    }

    
    let taxaDolar = 2.20;
    let dolares = reais / taxaDolar;
    resultado.innerText = `Posso ter US$ ${dolares.toFixed(2)}`;
    resultado.style.color = "black";
}


document.addEventListener("DOMContentLoaded", function() {
    const currencies = [
        { name: "Libra esterlina", value: "0,80744", change: "+0,22%" },
        { name: "Real brasileiro", value: "5,7736", change: "-0,62%" },
        { name: "Euro", value: "0,96958", change: "+0,13%" },
        { name: "Iene japonês", value: "151,75", change: "+0,23%" }
    ];

    const tbody = document.querySelector("#currencyTable tbody");

    currencies.forEach(currency => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = currency.name;
        row.appendChild(nameCell);

        const valueCell = document.createElement("td");
        valueCell.textContent = currency.value;
        row.appendChild(valueCell);

        const changeCell = document.createElement("td");
        changeCell.textContent = currency.change;
        row.appendChild(changeCell);

        tbody.appendChild(row);
    });
});




