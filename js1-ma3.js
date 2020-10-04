question-1.js
const divide = (a,b) => {
    return a / b;
}

console.log(division(10,2));

question-2.js
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

function generateHTML(data) {
    
    resultsContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">Name: ${data[i].name} , Rating: ${data[i].rating}, Number of tags: ${data[i].tags.length}</div>`;

    }
}

async function getGameData() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        const gameData = data.results;

        generateHTML(gameData)

    } catch (error) {
        resultsContainer.innerHTML = `<div class="result">Error: ${error}</div>`;

    }
}

getGameData();
