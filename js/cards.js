//******************************************************************************** */
//card premmier con json

fetch("../js/premmier.json")
    .then(response => response.json())
    .then (premmier => {

    const moviesPremiere = premmier;

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

fetch("../js/recommended.json")
    .then(response => response.json())
    .then (recommended => {

    const moviesRecommended = recommended;

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
})


//********************************************************************************************************** */

fetch("../js/classic.json")
    .then(response => response.json())
    .then (classic => {

    const moviesClassic = classic;

    function movieCardClassic(){
        moviesClassic.forEach(el => {
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
})







// const moviesCassic = [
//     {
//         nommbre: "pulpFiction",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "04",
//         movieId: 001,
//         img:"imgThirteen", 
//     },
//     {
//         nommbre: "taxiDriver",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "05",
//         movieId: 001,
//         img:"imgFourteen", 
//     },
//     {
//         nommbre: "godFather",
//         duracion: 120,
//         rate: "ATP",
//         descripcion: "Es una re pelicula re copada con muchos efectos",
//         sala: "06",
//         movieId: 001,
//         img:"imgFifteen", 
//     },
// ]

const cardPremmiereCreator = document.querySelector('#movie-cards-premmiere');
const cardRecommendedCreator = document.querySelector('#movie-cards-recommended');
const cardClassicCreator = document.querySelector('#movie-cards-classic');



//Card Classic

// function movieCardClassic(){
//     moviesCassic.forEach(el => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <div class="card ${el.img}" id="card-1">
//                 <div class="content">
//                     <h2>${el.sala}</h2>
//                     <h3>Movie theatre</h3>
//                     <p>${el.descripcion}</p>
//                     <a class="btn-buy" href="./pages/movieTh1.html" id="${el.nommbre}">Buy Ticket</a>
//                 </div>
//         </div>
//         `
//         cardClassicCreator.appendChild(div)
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

// movieCardClassic();
