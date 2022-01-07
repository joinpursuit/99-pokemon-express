const express = require('express');
const res = require('express/lib/response');
const app = express();
const pokemon = require('./models/pokemon.json');
//console.log(pokemon[0]);


app.get('/', (request, response) => {
    console.log(`GET request received to get route ('/')`);
    response.send('Welcome 99 Pokemon');
});

app.get('/bugs', (request, response) => {
    console.log(`GET request received to get route (/bugs)`);
    response.send("<h1>99 little bugs in the code<h1/>" +
    `<a href='http://localhost:8888/bugs/101'>Pull one down \n Patch it around</a>`);
});

app.get('/bugs/:numberOfBugs', (request, response) => {
    const { numberOfBugs } = request.params;
    console.log(`GET request received to get route (/bugs/:numberOfBugs)`);
    if (numberOfBugs < 198) {
        response.send(
            `${numberOfBugs} little bugs in the code` +
            `<a href='http://localhost:8888/bugs/${Number(numberOfbugs) + 2
        }'>Pull one down, patch it around</a>` 
        );
    }
        else if (numberOfBugs < 200) {
            response.send(
                `${numberOfBugs} little bugs in the code` +
                `/href.*201.*Pull one down, patch it around/`
            );
        } else response.send(`Too many bugs!! Start over!`);
});

app.get('/pokemon', (request, response) => {
    console.log(`GET request received to get route ('/pokemon')`);
    response.send(pokemon);
});

app.get('/pokemon/search/:name', (request, response) => {
    console.log(`GET request received to get route ('/pokemon/search')`);
    console.log(request.params.name);
    let pokeName = [];
        pokemon.find((poke) => {
            console.log(poke.name);
        poke.name === `${request.params.name}`
        return pokeName.push(poke.name);
        });
        response.send(poke.name);
});

app.get('/pokemon/:index', (request, response) => {
    console.log(`GET request received to get route: /pokemon/:index`);
    if (!pokemon[request.params.index]) {
        response.send(`Sorry, no pokemon found at ${request.params.index}`)
    } else { 
        response.send(pokemon[request.params.index]);
    }
});

app.get('/:verb/:adjective/:noun', (request, response) => {
    const { verb, adjective, noun } = request.params
    console.log(`GET request received to get route ('/verb/:adjective/:noun')`);
    response.send(
        `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
        );
});


//app.get('/pokemon', (request, response) => {
    //console.log(`GET request received to get route ('/')`);
   // response.send(pokemon);
//});

module.exports = app;