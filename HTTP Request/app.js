fetch("https://swapi.co/api/planets/")
    .then((response) => {
        if (!response.ok)
            throw new Error(`Status Code Error: ${response.status}`);

        response.json().then((data) => { //llamo al metodo json para acceder a data
            for (let planet of data.results) {
                console.log(planet.name);
            }
        });
    })
    .catch((err) => {
        console.log("Something went wrong with fetch");
        console.log(err);
    });