class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
    let playerName = getInputValue('playername');
    let value = 5;
    let fixedString = value.toFixed(4);
    logPlayer(playerName);
    postScore(100, playerName);
    postScore(-5, playerName);
}
function logPlayer(name = 'MultiMath player') {
    console.log(`New game starting for player: ${name}`);
}
document.getElementById('startGame').addEventListener('click', startGame);
function getInputValue(elementId) {
    const inpElement = document.getElementById(elementId);
    if (inpElement.value === '') {
        return undefined;
    }
    else {
        return inpElement.value;
    }
}
function postScore(score, playerName) {
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMsg;
    }
    const scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = `${score} - ${playerName}`;
    logger(`${score}`);
}
const logMsg = (msg) => console.log(msg);
logMsg("tralalal");
function logError(err) {
    console.error(err);
}
const firstPlayer = new Player();
firstPlayer.name = 'Jony';
console.log(firstPlayer.name);
//# sourceMappingURL=app.js.map