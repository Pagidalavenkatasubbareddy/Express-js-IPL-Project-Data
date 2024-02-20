const matchesData = require('./../public/output/matches.json');
const fs = require('fs');

try {
  const tossAndMatchWins = matchesData => {
    const teams = matchesData.reduce((acc, match) => {
      if (match.toss_winner === match.winner) {
        if (acc[match.toss_winner]) {
          acc[match.toss_winner]++
        } else {
          acc[match.toss_winner] = 1
        }
      }
      return acc
    }, [])

    const res = []

    for (let team in teams) {
      res.push(`${team}: ${teams[team]} times`)
    }
    return res
  }

  const res = tossAndMatchWins(matchesData)

  fs,
    fs.writeFileSync(
      `src/public/output/tossAndMatchWins.json`,
      JSON.stringify(res, null, 2)
    )
    
} catch (error) {
  console.log(error)
}
