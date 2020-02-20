const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


const mute = document.getElementById('mute');
const volumeSlider = document.getElementById('volumeSlider');



//song titles
const songs = ['acousticbreeze', 'anewbeginning', 'goinghigher', 'happyrock', 'littleidea', 'memories', 'badass', 'cute', 'energy', 'jazzyfrenchy', 'relaxing', 'retrosoul', 'rumble', 'thejazzpiano'];

//keep track of song
let songIndex = 13;

//initially load song details into DOM
loadSong(songs[songIndex]);

//update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

//play song
function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}
//pause song
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

//previous song
function prevSong(){
    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length-1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

//next song
function nextSong(){
    songIndex++;

    if(songIndex > songs.length-1){
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}


//update progress
function updateProgress(e){
    const { duration, currentTime} = e.srcElement;
    //console.log(duration, currentTime);
    const progressPercent = (currentTime / duration ) *100;
    // console.log(progressPercent);
    progress.style.width = `${progressPercent}%`;
}

//set progress bar
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX
    // console.log(width);
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
    console.log(clickX);
}


//set volume
function setVolume(){
    // return true;
    audio.volume = volumeSlider.value / 100;
    // console.log(audio.volume)
    if(volumeSlider.value == 0){
        mute.innerHTML = `<i class="fas fa-volume-mute fa-2x"></i>`
    } else {
        mute.innerHTML = `<i class="fas fa-volume-up fa-2x"></i>`
    }
}

//mute audio
function audioStatus(){
    // return true;
    if(audio.muted){
        audio.muted = false;
        mute.innerHTML = `<i class="fas fa-volume-up fa-2x"></i>`
    }else {
        // video.pause();
        audio.muted = true;
        mute.innerHTML = `<i class="fas fa-volume-mute fa-2x"></i>`
    }
}


//event listeners

playBtn.addEventListener('click', ()=> {
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

//change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

//time/song update event
audio.addEventListener('timeupdate', updateProgress);

//click on progress bar
progressContainer.addEventListener('click', setProgress);

//song ends
audio.addEventListener('ended', nextSong);

//set volume event
mute.addEventListener('click', audioStatus);
volumeSlider.addEventListener('change', setVolume);