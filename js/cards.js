const cardPremmiereCreator = document.querySelector('#movie-cards-premmiere');
const cardRecommendedCreator = document.querySelector('#movie-cards-recommended');
const cardClassicCreator = document.querySelector('#movie-cards-classic');

//******************************************************************************** */
//card premmier con json

fetch("/js/premmier.json")
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
//card recommended con json

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
//card classic con json
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







