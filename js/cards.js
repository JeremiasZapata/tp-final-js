//******************************************************************************** */
//card premmier con json

fetch("../js/movies.json")
    .then(response => response.json())
    
    .then (premmier => {

        const premiere = data["premmier"]

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

})

//************************************************************************************************ */



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

// function movieCardPremmiere(){
//     moviesPremiere.forEach(el => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <div class="card ${el.img}" id="card-1">
//                 <div class="content">
//                     <h2>${el.sala}</h2>
//                     <h3>Movie theatre</h3>
//                     <p>${el.descripcion}</p>
//                     <a href="./pages/movieTh1.html" id="${el.nommbre}">Buy Ticket</a>
//                 </div>
//         </div>
//         `
//         cardPremmiereCreator.appendChild(div)
//         const backGroundToLs = document.getElementById(`${el.nommbre}`)
//         backGroundToLs.addEventListener("click", () => {
//             console.log(`${el.nommbre}`)
//             localStorage.setItem("backGroundOnLs", `${el.nommbre}`);
//         })
//         VanillaTilt.init(document.querySelectorAll(".card"), {
//             max: 4,
//             speed: 400
//             });
            
//     })
// }

// movieCardPremmiere();


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
