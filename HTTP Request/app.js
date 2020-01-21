fetch("https://swapi.co/api/planets/")
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);

        return response.json();
    })
    .then((data) => { //llamo al metodo json para acceder a data
        console.log("Fetched all planets (first 10)");
        const filmURL = data.results[0].films[0]; //accediendo al primer film del primer planet
        return fetch(filmURL) //Promise, la cual puedo return
    })
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);

        return response.json();
    })
    .then((data) => {
        console.log("Fetched first film from first planet");
        console.log(data.title);
    })
    .catch((err) => {
        console.log("Something went wrong with fetch");
        console.log(err);
    })