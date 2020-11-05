

const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'
const suggestions = [];

fetch(endpoint)
    .then(data => data.json())
    .then(data => suggestions.push(...data))

    console.log(suggestions)

function findMatches(wordsTomatch, restaurants) {
    return restaurants.filter(cat => {
        const regex = new RegExp(wordsTomatch, 'gi');
        console.log(regex);
        return cat.name.match(regex) || cat.category.match(regex)
    })
}

function displayMatches(){
    const matchArray = findMatches(this.value, suggestions)
    const html = matchArray.map(cat => {
        return `
            <li>
                <span class="name">${cat.name}</span><br>
                <span class='category'>${cat.category}</span><br>
                <span class='location'>${cat.city}</span>
            </li>
        `;
    }).join(''); 
    suggestionList.innerHTML = html;
}

const searchInput = document.querySelector('.textInput')
const suggestionList = document.querySelector('.suggestionList')

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
