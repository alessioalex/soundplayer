var soundplayer = require("../index.js")

var options = {
    "filename": "preview.mp3",
    gain: 100,
    debug: true,
    player: "afplay",
    device: "plughw0:0"
}
var player = new soundplayer(options)

console.log("bingo")
player.play();
player.on('error', function() {
    console.log('Error');
});

player.on('complete', function() {
    console.log('Done with playback!');
});