const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('src/public'))

const routes = [
  '/1', '/2', '/3', '/4', '/5', '/6', '/7', '/8', '/9'
];
const filePaths = [
  'matchesWonPerYear.json',
  'matchesWonPerTeamPerYear.json',
  'extraRunsperTeamIn2016.json',
  'topEconomicalBowlers_2015.json',
  'tossAndMatchWins.json',
  'highestPlayerOfTheMatchPerSeason.json',
  'strikeRatePerSeason.json',
  'highestDismissals.json',
  'bestEconomyBowlerInSuperOvers.json'
];
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,`homepage.html`))
})

routes.forEach((route, index) => {
  app.get(route, (req, res) => {
      res.sendFile(path.join(__dirname,`/src/public/output/${filePaths[index]}`) );
  });
});

app.get('/charts/:id', (req, res) => {
  res.sendFile(path.join(__dirname,`src/public/output/HtmlCharts/chart${req.params.id}.html`))
})



const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})

