const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('views'));
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))

//assuming app is express Object.
//http://localhost:3000/
app.get('/', (req,res) => {
  res.sendFile('./index.html');
});


//'http://localhost:3000/profile'
app.get('/profile', (req, res) => {
  console.log('profile');
  res.send("Bijaya");
});
//'http://localhost:3000/checks'
app.get('/checks',  (req, res) => {
  console.log('checks');
  res.send("Hi Julian!!");
})
//'http://localhost:3000/tutorial'
app.get('/tutorial',  (req, res) => {
  console.log('tutorial')
  res.send("Julian is nice!");
})

// server.js
//`http://localhost:3000/api/taquerias`
let taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
]
  app.get('/api/taquerias', (req, res) => res.json(taquerias) );

// 'http://localhost:3000/greetings/Bijaya'
app.get("/greetings/:name", (request, response) => {
  response.send( "Hello, " + request.params.name );
});

//'http://localhost:3000/thank/?name=Bijay'
//'http://localhost:3000/thank/?name=Bijaya%20Manandhar'
http://localhost:3000/thank/?name=Bijaya+Manandhar
app.get("/thank", (req, res) => {
  console.log(req.query);
  let name = req.query.name;
  res.send('Thank you, ' + name + '!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))