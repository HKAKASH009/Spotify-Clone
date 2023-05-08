console.log("welcome to HK's Spotify clone") ;

// Initialize the Variables
let songIndex =  0 ;
let audioElement = new Audio('songs/1.MP3') ;
let masterPlay = document.getElementById('masterPlay') ;
let myProgressBar = document.getElementById('myProgressBar') ;
let gif1 = document.getElementById('gif1') ;
let gif = document.getElementById('gif') ;
let songitems = Array.from(document.getElementsByClassName('songItem')) ;

let songs = [
    {songName: "Salam-e-Ishq1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Salam-e-Ishq3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Salam-e-Ishq4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Salam-e-Ishq5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Salam-e-Ishq6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Salam-e-Ishq7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Salam-e-Ishq8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Salam-e-Ishq9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Salam-e-Ishq10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
] ;

songitems.forEach((element, i) => { 
    // console.log(element, i) ;
    element.getElementsByTagName("img")[0].src = songs[i].coverPath ;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName ; 
});

// audioElement.play() ;

// Handel play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play() ;
        masterPlay.classList.remove('fa-play-circle') ;
        masterPlay.classList.add('fa-pause-circle') ;
        gif.style.opacity = 1 ;
        gif1.style.opacity = 1 ;
    }
    else{
        audioElement.pause() ;
        masterPlay.classList.remove('fa-pause-circle') ;
        masterPlay.classList.add('fa-play-circle') ;
        gif.style.opacity = 0 ;
        gif1.style.opacity = 0 ;

    }
    
})

// Listen to Element
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate') ;
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100) ;
    // console.log(progress);
    myProgressBar.value = progress ;
}) ;


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 ;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target) ;
        makeAllPlays() ;
        index = parseInt(e.target.id) ;
        e.target.classList.remove('fa-play-circle') ;
        e.target.classList.add('fa-pause-circle') ;
        audioElement.src = `songs/${index+1}.mp3` ;
        audioElement.currentTime = 0 ;
        audioElement.play() ;
        masterPlay.classList.remove('fa-play-circle') ;
        masterPlay.classList.add('fa-pause-circle') ;
        gif.style.opacity = 1 ;
        gif1.style.opacity = 1 ;

    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0 ;
    }
    else{
        songIndex += 1 ;
    }
    audioElement.src = `songs/${songIndex+1}.mp3` ;
        audioElement.currentTime = 0 ;
        audioElement.play() ;
        masterPlay.classList.remove('fa-play-circle') ;
        masterPlay.classList.add('fa-pause-circle') ;
        gif.style.opacity = 1 ;
        gif1.style.opacity = 1 ;


})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0 ;
    }
    else{
        songIndex -= 1 ;
    }
    audioElement.src = `songs/${songIndex+1}.mp3` ;
        audioElement.currentTime = 0 ;
        audioElement.play() ;
        masterPlay.classList.remove('fa-play-circle') ;
        masterPlay.classList.add('fa-pause-circle') ;
        gif.style.opacity = 1 ;
        gif1.style.opacity = 1 ;


})






