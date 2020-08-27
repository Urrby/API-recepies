const baseEndPoint = "http://www.recipepuppy.com/api";

async function fetchRecepies(querry) {
  const res = await fetch(`${baseEndPoint}?q=${querry}`);
  const data = await res.json();
}

fetchRecepies("pizza");