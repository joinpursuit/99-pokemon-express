
const express = require("express");
const pokemon = require("./models/pokemon.json");
//console.log(pokemon[0]);

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});


app.get("/bugs", (req, res) => {
  res.send(`
  <h1>99 little bugs in the code"!</h1>
  <a href="http://localhost:8888/bugs/101">pull one down, patch it around</a>
  `);
});

app.get("/bugs/:number_of_bugs", (req, res) => {
  const { number_of_bugs } = req.params;
  if (Number(number_of_bugs) < 200) {
    res.send(` ${number_of_bugs} little bugs in the code
    <a href="http://localhost:8888/bugs/${
      Number(number_of_bugs) + 2
    }">Pull one down, patch it around</a>`);
  } else {
    res.send(
      `<a href="http://localhost:8888/bugs/">Too many bugs!! Start over!</a>`
      );
    }
  });
  
  
  app.get("/:verb/:adj/:noun", (req, res) => {
    console.log(req.params);
    console.log("hello 16")
    const { verb, adj, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adj}-${noun}`);
     // Congratulations on starting a new project called run-runny-runner
  });




app.get("/pokemon", (req, res) => {
    let pokes = pokemon;
  res.send(pokes);
});
  



app.get("/pokemon/search", (req, res) => {
  const {name} = req.query
  console.log('search function')
  res.send(name)  
});



app.get("/pokemon/:index", (req, res) => {
  console.log('index is firing')
  let pokes = pokemon;
  const {index} = req.params;
  if (pokes[index]) {
    res.send(pokes[index]);
  } else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});











  // describe("/pokemon/search", () => {
  //   it("sends an empty array when the Pokemon isn't found", async () => {
  //     const response = await request(app).get("/pokemon/search?name=missingno");

  //     expect(JSON.parse(response.text)).toEqual([]);
  //   });

  //   it("sends the Pokemon when the name exactly matches", async () => {
  //     const response = await request(app).get(`/pokemon/search?name=${pokemon[0].name}`);

  //     expect(JSON.parse(response.text)).toEqual([pokemon[0]]);
  //   });

  //   it("sends the Pokemon when the name matches ignoring case", async () => {
  //     const response = await request(app).get(
  //       `/pokemon/search?name=${pokemon[0].name.toUpperCase()}`
  //     );

  //     expect(JSON.parse(response.text)).toEqual([pokemon[0]]);
  //   });
  // });

//   describe("/pokemon/:index", () => {
//     it("sends a match when the index matches a Pokemon", async () => {
//       const response = await request(app).get("/pokemon/9001");

//       expect(response.text).toEqual("Sorry, no pokemon found at 9001");
//     });

//     it("sends a sorry message when no Pokemon is found at the index", async () => {
//       const response = await request(app).get("/pokemon/123");

//       expect(JSON.parse(response.text)).toEqual(pokemon[123]);
//     });
//   });

//   describe("/:verb/:adjective/:noun", () => {
//     it("sends a congratulations adjective", async () => {
//       const response = await request(app).get("/run/runny/runner");

//       expect(response.text).toEqual(
//         "Congratulations on starting a new project called run-runny-runner"
//       );
//     });
//   });
// });




// make a route /pokemon/search - where a user can add a query parameter such 
// as http://localhost:8888/pokemon/search?name=oddish



module.exports = app;

