let dolar = 5.51

let botao = document.getElementById("botao")

function convertermoedas() {
    let inputvalorreais = Number(document.getElementById("inputvalorreais").value)

    let textdolar = document.getElementById("text-dolar")

    let textreais = document.getElementById("text-reais")

    let valoremdolar = inputvalorreais / dolar

    textdolar.innerHTML = valoremdolar.toLocaleString("en-US", { style: "currency", currency: "USD"})

    textreais.innerHTML = inputvalorreais.toLocaleString("pt-br", { style: "currency", currency: "BRL"})

}

botao.addEventListener("click", convertermoedas)

//valoremdolar.toLocaleString("pt-br",{style: "currency", currency: "BRL"