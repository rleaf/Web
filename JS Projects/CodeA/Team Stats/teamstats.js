const team = {
  _players: [
    {firstName: 'John', lastName: 'Smith', age: 25},
    {firstName: 'James', lastName: 'Williams', age: 20},
    {firstName: 'Chris', lastName: 'Wilson', age: 19},
  ],
  _games: [
    {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
    {opponent: 'Wolves', teamPoints: 23, opponentPoints: 20},
    {opponent: 'Lions', teamPoints: 15, opponentPoints: 18},
  ],
  get players() {
    return this._players;
	},
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    }
    this.players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints) {
    const game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    }
    this.games.push(game);
  },
};

team.addPlayer('Steph', 'Curry', '28');
team.addPlayer('Lisa', 'Leslie', '44');
team.addPlayer('Bugs', 'Bunny', '76');

console.log(team.players);

team.addGame('Turtles', '32', '43')
team.addGame('Pandas', '23', '39')
team.addGame('Raccoons', '12', '29')

console.log(team.games);
