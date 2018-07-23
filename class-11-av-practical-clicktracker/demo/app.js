'use strict';

var video = document.getElementById('lecture-video');
var start = document.getElementById('video-start');
var pause = document.getElementById('video-pause');

function handleStartVideo() {
  video.play();
}

function handlePauseVideo() {
  video.pause();
}

start.addEventListener('click', handleStartVideo);
pause.addEventListener('click', handlePauseVideo);