function verificaPalavra(){
    const palavra = document.getElementById("palavra").value.toLowerCase()
    const palavraCorreta = "pipoca"
   
    if(palavra == palavraCorreta){
      window.location.href = "correto.html"
    } else {
      window.location.href = "erro.html"
    }
  }