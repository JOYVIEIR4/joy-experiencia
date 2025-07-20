window.onload= function() {
  document.getElementById("botao-enviar").addEventListener("click", validaFormulario);
};

  function validaFormulario(event) {
  event.preventDefault();
  let= nome = document.getElementById("nome").value.trim();
  let= texto = document.getElementById("texto").value.trim();

  if (nome !== "" && texto !== "") {
    alert("Obrigado pela sua participação!");
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}
  
