
fetch("https://swapi.co/api/planets/")
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);

        return response.json();
    })
    .then((data) => { //llamo al metodo json para acceder a data
        console.log("Fetched all planets (first 10)");
        for (let planet of data.results) {
            console.log(planet.name);
        }
        const nextURL = data.next; //La API tiene una propiedad llamada next que permite acceder a la siguiente pagina de data
        return fetch(nextURL) //Promise, la cual puedo return
    })
    .then((response) => {
        if (!response.ok) // chequea si esta todo correcto para fetch
            throw new Error(`Status Code Error: ${response.status}`);

        return response.json(); //si lo esta, aplica el metodo json(convertir)
    })
    .then((data) => {
        console.log("Fetched Next 10 Planets");
        for (let planet of data.results) {
            console.log(planet.name);
        };
    })
    .catch((err) => {
        console.log("Something went wrong with fetch");
        console.log(err);
    })