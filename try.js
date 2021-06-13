fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => displayCountries(data))

// const displayCountries = countries => {
//     const countriesDiv = document.getElementById("countries")
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         const countryDiv = document.createElement("div");
//         countryDiv.className = 'country';
//         const countryInfo = `
//             <h3 class="country-name">${country.name}</h3>
//             <p>${country.capital}</p>
//         `
//         countryDiv.innerHTML = countryInfo;
//         countriesDiv.appendChild(countryDiv)
//     }
// }
const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries")
    countries.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.className = "country";
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button class='btn' onclick="displayCountryDetails('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv)
    });
}
    const displayCountryDetails = name =>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => randomCountryInfo(data[0]))
    };
    const randomCountryInfo = country =>{
        const countryDiv = document.getElementById("countryDetail");
        countryDiv.innerHTML = `
            <h1>Name: ${country.name}</h1>
            <p>Population: ${country.population}</p>
            <p>Area: ${country.area}</p>
            <p>Region: ${country.region}</p>
            <img src="${country.flag}">

        `
    } 
