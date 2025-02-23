// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultadoAmigo = document.getElementById('resultado');

function agregarAmigo() {

  if (inputAmigo.value === '' || inputAmigo.value === ' ') {
    alert('debes ingresar al menos un nombre!')

  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputAmigo.value
    listaAmigos.appendChild(li)
    console.log(listaAmigos);
  }
  inputAmigo.value = '';

}


function sortearAmigo() {

  let amigoLista = document.getElementsByTagName('li')
  // console.log(amigoLista);
  if(amigoLista.length === 0){
    alert('Agrega el nombre de al menos un amigo para sortear!')
    return
  }
  let sorteoAleatorio = Math.floor(Math.random()*amigoLista.length)
  let seleccionado = amigoLista[sorteoAleatorio].innerHTML
    resultadoAmigo.innerHTML = 'El resultado es ' + seleccionado 
}
