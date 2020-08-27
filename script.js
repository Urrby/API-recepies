const baseEndPoint = "http://www.recipepuppy.com/api";
const proxyLink = "https://cors-anywhere.herokuapp.com/";
const form = document.querySelector("form.search");
const recepiesGrid = document.querySelector(".recipes");

async function fetchRecepies(query) {
    const res = await fetch(`${proxyLink}${baseEndPoint}?q=${query}`);
    const data = await res.json();
    return data;
}

async function submitHandler(e) {
    e.preventDefault();
    const el = e.currentTarget;
    el.submit.disabled = true;
    const recepies = await fetchRecepies(el.query.value);
    el.submit.disabled = false;
    displayRecepies(recepies.results);
}

function displayRecepies(recepies) {
    const html = recepies.map(recepie => {
        return `
            <div class="recipe">
                <h2>${recepie.title}</h2>
                <p>${recepie.ingredients}</p>
                ${recepie.thumbnail && `<img src="${recepie.thumbnail}" alt="${recepie.title}"/>`}
                <a href="${recepie.href}">View recipe</a>
            </div>
        `
    });
    recepiesGrid.innerHTML = html.join("");

    
}


form.addEventListener("submit", submitHandler);
fetchRecepies("pizza");