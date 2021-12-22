
import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



player.on('play', function () {
    console.log('played the video!');
});
function setLocalStorage(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

player.on('timeupdate', throttle(setLocalStorage, 1000));

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});

const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime) {
    player.setCurrentTime(currentTime)
} else {
    player.setCurrentTime(0);
}

