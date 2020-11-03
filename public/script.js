function findMatches(words, restaurants) {


    return categories.filter( cat => {

        const regex = new RegExp(words, 'gi');
        return restaurants.categories.match(regex) || restaurants.name.match(regex) || restaurants.city.match(regex);
    })
}

function displayMatches()


const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'
const suggestions = [];

fetch(endpoint)
    .then(data => data.json())
    .then(data => suggestions.push(...data))

    console.log(suggestions)