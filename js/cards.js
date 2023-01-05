// Creacion de cards dinamicas 
const moviesPremiere = [
    {
        nommbre: "avengers",
        duracion: 120,
        rate: "ATP",
        descripcion: "Es una re pelicula re copada con muchos efectos",
        sala: "01",
        movieId: 001,
        img: "imgTwo", 
    },
    {
        nommbre: "caballeros",
        duracion: 120,
        rate: "ATP",
        descripcion: "Es una re pelicula re copada con muchos efectos",
        sala: "02",
        movieId: 001,
        img:"imgThree", 
    },
]

const cardCreator = document.querySelector('#movie-cards')


function movieCard(){
    moviesPremiere.forEach(el => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card ${el.img}" id="card-1">
                <div class="content">
                    <h2>${el.sala}</h2>
                    <h3>Movie theatre</h3>
                    <p>${el.descripcion}</p>
                </div>
        </div>
        `
        cardCreator.appendChild(div)
    })
}

movieCard();





