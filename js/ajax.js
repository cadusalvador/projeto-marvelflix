const carrossel = document.getElementById('carrossel');

const searchLimit = 30;
const offset = 90;
const timeStamp = 1640896858;
const apiKey = '08f566da6b82a90ddfb77631ee716e08';
const hash = 'c4e0d608c8dba297d12ffdf26378b991';

/*fetch(`https://gateway.marvel.com:443/v1/public/series?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}&limit=${searchLimit}`)
.then((response) => {
    return response.json();
})
.then((jsonParsed) => {
    console.log(jsonParsed);
});*/

/*const fetchSeries = async () => {
    for (let i = 0; i <= searchLimit; i++) {
        await getSeries(i);
    }
}*/

const getComics = async () => {
    const requestURL = `https://gateway.marvel.com:443/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}&limit=${searchLimit}&offset=${offset}`;
    const response = await fetch(requestURL);
    const comic = await response.json();

    comic.data.results.forEach(element => {
        const sourceImage = element.thumbnail.path + '/portrait_uncanny' + '.' + element.thumbnail.extension;
        createComicsSlider(sourceImage);
    }); 
}

function createComicsSlider(sourceImage) {
  const comicsElement = document.createElement("div");
  comicsElement.classList.add('item');

  const comicsInnerHTML = `
          <img class="carrosel-filmes__img" src="${sourceImage}" alt="">              
    `;
  comicsElement.innerHTML = comicsInnerHTML;
  carrossel.appendChild(comicsElement);
}

getComics();
