import './../scss/main.scss'
import Plyr from 'plyr';

const player = new Plyr(document.getElementById('player'), {
  controls: ['play', 'progress', 'fullscreen', 'mute'],
  muted: false,
  tooltips: { controls: false, seek: false },
});