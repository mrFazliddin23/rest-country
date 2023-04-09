const url = 'https://restcountries.com/v3.1/all';

const countries = document.querySelector('#countries');

fetch(url).then((recponse) => {
    if (!recponse.ok) {
        throw new Error("Find error Find error Find error")
    }
    return recponse.json()

}).then((data) => {

    data.map((davlatlar) => {
        console.log(davlatlar);
        const countryCard = document.createElement('div');
        countryCard.classList.add('countryCard');

        const flag = document.createElement('img');
        flag.src = davlatlar.flags.png;
        flag.alt = davlatlar.flags.alt;
        flag.classList.add('countryCard__flag');
        countryCard.appendChild(flag)

        const countryName = document.createElement('h3');
        countryName.innerText = `Name: ${davlatlar.name.common}`;
        countryName.classList.add('countries__name')
        countryName.style.color = "white";
        countryCard.appendChild(countryName);

        // const countryCapital = document.querySelector('h3');
        // countryCapital.innerText = `Capital: ${davlatlar.capital}`;
        // countryCapital.classList.add('country__capital');
        // countryCapital.style.color = "white";
        // countryCard.appendChild(countryCapital);

        const language = document.createElement('p');
        language.innerText = `Language: ${Object.values(davlatlar.languages)}`;
        language.classList.add('country__language');
        countryCard.appendChild(language);

        const region = document.createElement('p');
        region.innerText = `Region: ${davlatlar.region}`;
        region.classList.add('country__region');
        countryCard.appendChild(region);

        const population = document.createElement('p');
        population.innerText = `Population: ${davlatlar.population} mln`;
        population.classList.add('countries__population');
        countryCard.appendChild(population);

        const countryArea = document.createElement('p');
        countryArea.innerText = `Area: ${davlatlar.area}`;
        countryArea.classList.add('country__area');
        countryCard.appendChild(countryArea);



        countries.appendChild(countryCard);
    })

}).catch((error) => console.error(error));