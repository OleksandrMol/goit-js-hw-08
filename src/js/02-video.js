import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const VIDEO_TIME = "videoplayer-current-time";

const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));   

function onPlay({ seconds }) {
    const stringData = JSON.stringify(seconds);
    localStorage.setItem(VIDEO_TIME, stringData);
}


player.setCurrentTime(localStorage.getItem(VIDEO_TIME), 0)




