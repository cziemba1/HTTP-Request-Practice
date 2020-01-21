// const checkStatusAndParse = (response) => {
//     if (!response.ok)
//         throw new Error(`Status Code Error: ${response.status}`);

//     return response.json();
// }

// const printPlanets = (data) => {
//     console.log("Loaded 10 more planets...");
//     for (let planet of data.results) {
//         console.log(planet.name);
//     }
//     return Promise.resolve(data.next) // crea una nueva Promise que return para que pueda refactorizar de esta forma
// };

// const fetchNextPlanets = (url = "https://swapi.co/api/planets/") => {
//     return fetch(url);
// }

// fetchNextPlanets()
//     .then(checkStatusAndParse) //Esta forma solo se puede hacer cuando la promise "returns"
//     .then(printPlanets)
//     .then(fetchNextPlanets)
//     .then(checkStatusAndParse)
//     .then(printPlanets)
//     .catch((err) => {
//         console.log("Something went wrong with fetch");
//         console.log(err);
//     })

//Usando la libreria AXIOS

// axios.get("https://swapi.co/api/planets/")
//     .then((res) => {
//         console.log(res.data); //ya no es necesario parse a Json
//     })
// .catch((err) => {
//     console.log("In catch callback!!")
//     console.log(err);
// });No es necesario, axios ya realiza el catch

const fetchNextPlanets = (url = "https://swapi.co/api/planets/") => {
    return axios.get(url)
};

const printPlanets = ({ data }) => {
    console.log(data);
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
};

fetchNextPlanets()
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .catch((err) => {
        console.log("ERROR", err);
    })