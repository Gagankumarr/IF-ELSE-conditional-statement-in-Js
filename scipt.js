let teamDolphinsAvg = (97 + 112 + 101) / 3;
let teamKoalasAvg = (109 + 95 + 123) / 3;
let minWinningScore = 100;

if (teamDolphinsAvg > teamKoalasAvg &&
    teamDolphinsAvg >= minWinningScore) {
    console.log('Team Dolphin wins');
}
else if (teamKoalasAvg > teamDolphinsAvg &&
    teamKoalasAvg >= minWinningScore) {
    console.log('Team Koalas wins');
}
else if (teamKoalasAvg === teamDolphinsAvg &&
    teamDolphinsAvg >= minWinningScore &&
    teamKoalasAvg >= minWinningScore) {
    console.log('draw');
}

else {
    console.log('NO one won !!!!');
}
