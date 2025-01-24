let nomes = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let input = document.querySelector("input");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Erro! Digite um nome para adicionar.");
        return;
    }

    nomes.push(nome);
    input.value = ""; // Limpa o campo de entrada
    exibirNomes();
}

// Função para exibir os nomes na tela
function exibirNomes() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // Limpa a lista anterior

    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    let resultado = document.querySelector("#resultado");
    if (nomes.length < 2) {
        resultado.textContent = "Adicione pelo menos dois nomes para sortear.";
        return;
    }

    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    resultado.textContent = `O amigo sorteado é: ${sorteado}`;
}
