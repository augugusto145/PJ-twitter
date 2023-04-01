/**
 * pegar o valor do textArea
 * construir a publiçao
 * escolher o perfil
 * postar a publiçao

 * 
 */

const textArea = document.querySelector ('textarea');
const tweetar = document.querySelector ('button');
const feed = document.querySelector (".conteudoPrincipal_tweet")


function pegartweet (event){
    event.preventDefault();
const tweettextArea= textArea.value;
criartweet (tweettextArea)
}

tweetar.addEventListener('click', pegartweet);




// criar publicacao
// pegar o texto
//nome que sera publicado
//foto
// o @
// o hoarario 

function criartweet (tweettexto) {




let data = new Date ()
let hora =data.getHours()
let minutos = data.getMinutes()


const tweet = {
nome : "criador",
foto: "./img/perfil.png" ,
usuario : "@criador",
texto : tweettexto,
tempo : `${hora}: ${minutos}`
}
 listartweet (tweet)



}

function listartweet (tweet) {

    const {nome,foto,usuario,tempo,texto} = tweet
    console





   let li = document.createElement ("li") 
   li.classList.add("conteudoPrincipal_feed")
   let img = document.createElement ("img") ; img.src = foto
   let div = document.createElement ("div") 
   

   let h2 = document.createElement ("h2") 
  h2.innerText = nome
 

   let span = document.createElement ("span");
   span.innerText = `${usuario}-${tempo}`
   let p = document.createElement ("p") ; p.innerText = texto
   

   //adicionar elementos na div

   div.appendChild (h2)
   div.appendChild(span)
   div.appendChild(p)



   // adicionar na li

li.appendChild (img)
li.appendChild(div)


   
feed.insertBefore(li, feed.firstChild);

//// limpar a caixa de texto depois que publicar ////
textArea.value = ""

}

