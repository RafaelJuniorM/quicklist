
// obter os elementos 
const item = document.getElementById('item');
const form = document.querySelector("form")
const deleteItem = document.querySelectorAll('[aria-label*="Remover"]');
const listItem = document.querySelector(".lista-itens li")
const list = document.querySelector(".lista-itens")
const warning = document.getElementsByClassName("warning");


// capturar oque esta sendo digitado no input pelo usuario
item.addEventListener("input", ()=>{
   item.value;
})

form.addEventListener("submit", (event) => {
    event.preventDefault(); // o botao do form nao vai atualizar a pagina

    addItemList(item.value); // chamo a função passando o item digitado pelo usuario como parametro onde sera gerado um novo item na lista de compras
    item.value = ""; // o input voltar a ficar vazio apos adicionar 
})

// === função para adicionar um item na lista de compras === 
function addItemList(item) {
    try {
        const newList = document.createElement("li");
        newList.innerHTML = 
        `
        <label>
            <input type="checkbox"/>
            <span> ${item} </span>
          </label>
          <button type="button" aria-label="Remover item">
            <img src="assets/icons/lixeira.svg" />
          </button>
        `

        const addListUl = document.querySelector("main ul");
        addListUl.appendChild(newList);
    }catch (error) {
        alert("Ocorreu um erro ao tentar exibir o resultado. Por favor, tente novamente.");
    }
}




