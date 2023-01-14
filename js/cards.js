fetch("../js/premmier.json")
    .then(response => response.json())
    .then (premmier => {
        console.log(premmier)
    })

// Creacion de cards dinamicas 
// const moviesPremiere = [
//     {
//         nommbre: "avatar",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "01",
//         movieId: 001,
//         img: "imgOne",
//         dia: "lunes, mier" 
//     },
//     {
//         nommbre: "avengers",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "02",
//         movieId: 001,
//         img:"imgTwo", 
//     },
//     {
//         nommbre: "caballeros",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "03",
//         movieId: 001,
//         img:"imgThree", 
//     },
//     {
//         nommbre: "ironman",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "04",
//         movieId: 001,
//         img:"imgFour", 
//     },
//     {
//         nommbre: "james",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "05",
//         movieId: 001,
//         img:"imgFive", 
//     },
//     {
//         nommbre: "matrix",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "06",
//         movieId: 001,
//         img:"imgSix", 
//     },
//     {
//         nommbre: "thor",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "01",
//         movieId: 001,
//         img:"imgSeven", 
//     },
//     {
//         nommbre: "wakanda",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "02",
//         movieId: 001,
//         img:"imgEight", 
//     },
//     {
//         nommbre: "wolverine",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "03",
//         movieId: 001,
//         img:"imgNine", 
//     },
// ]

const moviesRecommended = [
    {
        nommbre: "backToTheFuture",
        duracion: 120,
        rate: "ATP",
        descripcion: "Es una re pelicula re copada con muchos efectos",
        sala: "04",
        movieId: 001,
        img:"imgTen", 
    },
    {
        nommbre: "indianaJones",
        duracion: 120,
        rate: "ATP",
        descripcion: "Es una re pelicula re copada con muchos efectos",
        sala: "05",
        movieId: 001,
        img:"imgEleven", 
    },
    {
        nommbre: "starWars",
        duracion: 120,
        rate: "ATP",
        descripcion: "Es una re pelicula re copada con muchos efectos",
        sala: "06",
        movieId: 001,
        img:"imgTwelve", 
    },
]

const moviesCassic = [
    {
        nommbre: "pulpFiction",
        duracion: 120,
        rate: "ATP",
        descripcion: "Es una re pelicula re copada con muchos efectos",
        sala: "04",
        movieId: 001,
        img:"imgThirteen", 
    },
    {
        nommbre: "taxiDriver",
        duracion: 120,
        rate: "ATP",
        descripcion: "Es una re pelicula re copada con muchos efectos",
        sala: "05",
        movieId: 001,
        img:"imgFourteen", 
    },
    {
        nommbre: "godFather",
        duracion: 120,
        rate: "ATP",
        descripcion: "Es una re pelicula re copada con muchos efectos",
        sala: "06",
        movieId: 001,
        img:"imgFifteen", 
    },
]

const cardPremmiereCreator = document.querySelector('#movie-cards-premmiere');
const cardRecommendedCreator = document.querySelector('#movie-cards-recommended');
const cardClassicCreator = document.querySelector('#movie-cards-classic');

//cards Premmiere

function movieCardPremmiere(){
    moviesPremiere.forEach(el => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card ${el.img}" id="card-1">
                <div class="content">
                    <h2>${el.sala}</h2>
                    <h3>Movie theatre</h3>
                    <p>${el.descripcion}</p>
                    <a href="./pages/movieTh1.html" id="${el.nommbre}">Buy Ticket</a>
                </div>
        </div>
        `
        cardPremmiereCreator.appendChild(div)
        const backGroundToLs = document.getElementById(`${el.nommbre}`)
        backGroundToLs.addEventListener("click", () => {
            console.log(`${el.nommbre}`)
            localStorage.setItem("backGroundOnLs", `${el.nommbre}`);
        })
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 4,
            speed: 400
            });
            
    })
}

movieCardPremmiere();


//Cards Recommended

function movieCardRecommended(){
    moviesRecommended.forEach(el => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card ${el.img}" id="card-1">
                <div class="content">
                    <h2>${el.sala}</h2>
                    <h3>Movie theatre</h3>
                    <p>${el.descripcion}</p>
                    <a href="./pages/movieTh1.html" id="${el.nommbre}">Buy Ticket</a>
                </div>
        </div>
        `
        cardRecommendedCreator.appendChild(div)
        const backGroundToLs = document.getElementById(`${el.nommbre}`)
        backGroundToLs.addEventListener("click", () => {
            console.log(`${el.nommbre}`)
            localStorage.setItem("backGroundOnLs", `${el.nommbre}`);
        })
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 4,
            speed: 400
            });
    })
}

movieCardRecommended();

//Card Classic

function movieCardClassic(){
    moviesCassic.forEach(el => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card ${el.img}" id="card-1">
                <div class="content">
                    <h2>${el.sala}</h2>
                    <h3>Movie theatre</h3>
                    <p>${el.descripcion}</p>
                    <a class="btn-buy" href="./pages/movieTh1.html" id="${el.nommbre}">Buy Ticket</a>
                </div>
        </div>
        `
        cardClassicCreator.appendChild(div)
        const backGroundToLs = document.getElementById(`${el.nommbre}`)
        backGroundToLs.addEventListener("click", () => {
            console.log(`${el.nommbre}`)
            localStorage.setItem("backGroundOnLs", `${el.nommbre}`);
        })
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 4,
            speed: 400
            });
    })
}

movieCardClassic();
