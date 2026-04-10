// Cotação de moedas do dia
const USD = 5.25
const EUR = 5.50
const GBP = 6.20

//Obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")

// Manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Capturando o evento de submit do formulario
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "U$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Função para converter o valor para a moeda selecionada
function convertCurrency(amount, price, symbol) {
    try {
        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)
        
        // Remove a classe que exibe o footer para esconder o resultado
        footer.classList.remove("show-result")
        alert("Ocorreu um erro ao converter a moeda. Por favor, tente novamente.")
    }
}