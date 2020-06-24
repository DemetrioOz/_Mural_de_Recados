// const nomes = [
//   { nome: "teste", msg: "ola eu cheguei aqui" },
//   { nome: "tes1", msg: "ola eu cheguei aqui" },
// ];

let nomes = JSON.parse(localStorage.getItem("nomes_list")) || [];

const form = document.querySelector("form");
const ul = document.querySelector("#two ul");
const inptElement = document.querySelector("#one input");
const messageArea = document.querySelector("#one textarea");

function render() {
  ul.innerHTML = "";
  for (nome of nomes) {
    let position = nomes.indexOf(nome);
    const li = document.createElement("li");
    const texto = document.createTextNode("");
    let divLI = document.querySelector("#mensagem");
    console.log(divLI);
    li.innerHTML = `<div
                    id="mensagem"
                class="card text-white bg-dark mb-3"
                style="max-width: 18rem;"
              >
                <div class="card-body">
                  <h5 class="card-title text-center">${nome.nome}</h5>
                  <p class="card-text text-center">
                    ${nome.msg}
                  </p>
                  <div class="">
                    <button onclick="deletaMsg(${position})" class="btn btn-secondary">X</button>
                  </div>
                </div>
              </div>`;
    li.append(texto);

    ul.append(li);
  }
}

render();

function rcbMsg() {
  const nomeRecebe = inptElement.value;
  const msgRecebe = messageArea.value;

  if (nomeRecebe == "" || msgRecebe == "") {
    alert("Tah faltando algo né não?? >_O");
    return;
  }
  const recebe = {
    nome: nomeRecebe,
    msg: msgRecebe,
  };

  nomes.push(recebe);

  render(nomes);
  salvaMsg();
}

function deletaMsg(position) {
  nomes.splice(position, 1);

  render();
  salvaMsg();
}

function salvaMsg() {
  localStorage.setItem("nomes_list", JSON.stringify(nomes));
}

// function criaMSG() {
//   let nomeMsg = inptElement.value;
//   let BodyMsg = messageArea.value;

//   let name = nomes.nome;

//   name.push(nomeMsg);
//   nomes[msg].push(BodyMsg);

//   inptElement.value = "";
//   BodyMsg.value = "";

//   render(nomes);
// }

// criaMSG();
