function imc() {
    const peso = document.getElementById("peso1")
    const altura = document.getElementById("altura1")

    const numPeso = Number(peso.value)
    const numAlt = Number(altura.value)

    const imc = numPeso / numAlt * 2

    document.getElementById("Resultado").innerText = "Resultado: " + imc

    
}




