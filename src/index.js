// console.log(data);
//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0]);
const cards = document.querySelector(".cards");

function renderCards() {
    cards.innerHTML = "";
    data.map((c) => {
        const el = document.createElement("li");
        el.classList.add("card");
        el.innerHTML = `
            <h2 class="card--title">${c.name.charAt(0).toUpperCase() + c.name.slice(1)}</h2>
            <img
                width="256"
                class="card--img"
                src="${c.sprites.other["official-artwork"].front_default}"
            />
            <ul class="card--text">
                <li>HP: ${c.stats.find(s => s.stat.name === "hp").base_stat}</li>
                <li>ATTACK: ${c.stats.find(s => s.stat.name === "attack").base_stat}</li>
                <li>DEFENSE: ${c.stats.find(s => s.stat.name === "defense").base_stat}</li>
                <li>SPECIAL-ATTACK: ${c.stats.find(s => s.stat.name === "special-attack").base_stat}</li>
                <li>SPECIAL-DEFENSE: ${c.stats.find(s => s.stat.name === "special-defense").base_stat}</li>
                <li>SPEED: ${c.stats.find(s => s.stat.name === "speed").base_stat}</li>
            </ul>
        `;
        cards.append(el);
    })

    
}

renderCards();

