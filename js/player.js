var songs = [
    "Bekhayali (Arijit Singh Version) - Kabir Singh 128 Kbps.mp3",
    "Chal Ghar Chalen - Malang - Unleash The Madness 192 Kbps.mp3",
    "Dilbar.mp3",
    "Kabhi Yaadon Mein.mp3",
    "Khairiyat - Chhichhore 128 Kbps.mp3",
    "Shayad - Love Aaj Kal 192 Kbps.mp3",
    "Taaron Ke Shehar.mp3",
    "Tujhe Kitna Chahne Lage.mp3",
    "Valam.mp3"
];
var songTitle = document.getElementById("songTitle");
var songSlider = document.getElementById("songSlider");
var currentTime = document.getElementById("currentTime");
var duration = document.getElementById("duration");
var volumeSlider = document.getElementById("volumeSlider");
var nextSong = document.getElementById("nextSong");
var song = new Audio();
var currentSong = 0;
window.onload = loadsong;
function loadsong() {
    song.src = "songs/" + songs[currentSong];
    songTitle.textContent = (currentSong + 1) + "." + songs[currentSong];
    nextSong.innerHTML += "<b>Next Song: </b>" + songs[(currentSong + 1) % songs.length];
    song.playbackRate = 1;
    song.volume = Number(volumeSlider.value);
    song.play();
    setTimeout(showDuration, 1000);
}
setInterval(updateSongSlider, 1000);
function updateSongSlider() {
    var c = Math.round(song.currentTime);
    songSlider.value = c.toString();
    currentTime.textContent = convertTime(c);
    if (song.ended) {
        next();
    }
}
function convertTime(secs) {
    var min = Math.floor(secs / 60);
    var sec = secs % 60;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    return (min + ":" + sec);
}
function showDuration() {
    var d = Math.floor(song.duration);
    songSlider.setAttribute("max", d);
    duration.textContent = convertTime(d);
}
function playOrPauseSong(img) {
    song.playbackRate = 1;
    if (song.paused) {
        song.play();
        img.src = "images/video-pause-button.png";
    }
    else {
        song.pause();
        img.src = "images/play.png";
    }
}
function next() {
    currentSong = (currentSong + 1) % songs.length;
    loadsong();
}
function previous() {
    currentSong--;
    currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
    loadsong();
}
function seekSong() {
    song.currentTime = Number(songSlider.value);
    currentTime.textContent = convertTime(song.currentTime);
}
function adjustVolume() {
    song.volume = Number(volumeSlider.value);
}
function increasePlaybackRate() {
    song.playbackRate += 0.5;
}
function decreasePlaybackRate() {
    song.playbackRate -= 0.5;
}
function repeat() {
    if (typeof song.loop == 'boolean') {
        song.loop = true;
    }
    else {
        song.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    song.play();
}
;
function shuffle() {
    for (var i = 0; i <= 20; i++) {
        var randomNumber = Math.floor(Math.random() * (8 - 0 + 1) + 0);
        currentSong = randomNumber;
    }
}
;
//# sourceMappingURL=player.js.map