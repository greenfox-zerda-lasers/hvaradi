var rootURL = "https://github.com/greenfox-academy/teaching-materials/blob/master/javascript/project-music-player/music"

var tracks = [
  "/Organoid_-_09_-_Purple_Drift.mp3?raw=true",
  "/Ars_Sonor_-_02_-_Never_Give_Up.mp3?raw=true",
  "/Doctor_Turtle_-_Doctor_Talos_Answers_The_Door.mp3?raw=true"
]

// addEventListener('click', 'musicTrack');

function playNext(e) {
  for (i=0; i < tracks.length; i++) {
    audio.src = tracks[i];
  }
}


function playTracks(e) {
  var audio = document.querySelector("#player audio")
  audio.src = rootURL + tracks[0];
  //audio.addEventListener('ended', playNext() );
}

playTracks()
