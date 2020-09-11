
const privateKey = 'b65d4e3422832841a949ae595edfb66f7246b369';
const publicKey = '4a437f402d4f94aed5acfb2a06996edd';
const ts = 1;
const hash = '6aa36ef64a1dc90495f51cd6293a933e';
const container = document.querySelector('#marvel-row');
const buttonSearch = document.querySelector('#search');


//Search Hero
const searchHero = name => {
  //codificar name 
  const hero   = encodeURIComponent(name);
  const urlAPI = `http://gateway.marvel.com/v1/public/characters?name=${hero}&ts=${ts}&apikey=${publicKey}&hash=${hash}`; 
  fetch(urlAPI)
  .then(response => response.json())
  .then(response => {
    response.data.results.forEach(e =>{
      printHero(e)
    })
  })
  .catch(e => console.log(e));
}


// //Button Hero

buttonSearch.addEventListener('keyup', e =>{
  if(e.keyCode === 13){
    container.innerHTML = '';
    searchHero(e.target.value);
   
  }
})

 

//Get Api  
const getMarvelApi = {
    render: () => {
        const urlAPI = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`; 
       fetch(urlAPI)
        .then(response => response.json())
        .then(response => {
          response.data.results.forEach( e =>  {
            printHero(e)
          })
        })    
        .catch(e => console.log(e));      
    }
  };


//Print
  const printHero = e =>{
    const hero =   
    `<div class="col-md-4">
        <h3 class="title">${e.name}</h3>
        <a href="${e.urlHero}" target="_blank">
          <img src="${e.thumbnail.path}.${e.thumbnail.extension}" alt="${e.name}" class="img-thumbnail">
        </a>
        <p class="description">${e.description}</p>
    </div>`;
    container.insertAdjacentHTML('beforeEnd', hero )
  }
  getMarvelApi.render();


