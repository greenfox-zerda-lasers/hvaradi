var newPlaylist = document.querySelector('#trackSelector');

var playlists = [
   "Relaxing music for programming",
   "Party"
];

//function for reading earlier generated playlists and create placeholder
//for save button and generate trash button
function createPlayList(){
   playlists.forEach(function(e, i){
       var tr = document.createElement("tr");
       var td1 = document.createElement("td");
       var title = document.createElement("span");
       var td2 = document.createElement("td");
       var td3 = document.createElement("td");
       var trash = document.createElement("span");
       title.textContent = playlists[i];
       trash.className = "ion-close-round";

       td1.appendChild(title);
       td3.appendChild(trash);
       tr.appendChild(td1);
       tr.appendChild(td2);
       tr.appendChild(td3);
       newPlaylist.appendChild(tr);

       td3.addEventListener("click", function(){
         newPlaylist.removeChild(tr);
       });
   })
}
createPlayList()

//creating input and save it with the save button
var playList = document.querySelector("#trackSelector");
var addPlaylistButton = document.querySelector(".ion-plus-round");

addPlaylistButton.addEventListener("click", addPlaylist);
var isPushed = false;

function addPlaylist(){
  if (isPushed) {
    return
  } else {
   // max méret, + scrollozható legyen
   var tr = document.createElement("tr");
   var td1 = document.createElement("td");
   var title = document.createElement("span");
   var td2 = document.createElement("td");
   var save = document.createElement("span");
   var td3 = document.createElement("td");
   var trash = document.createElement("span");
   var input = document.createElement("input");
   isPushed = true;
   input.setAttribute("class", "new-playlist-item");
   save.className = "ion-checkmark-round";
   trash.className = "ion-close-round";

   title.appendChild(input);
   td1.appendChild(title);
   td2.appendChild(save);
   td3.appendChild(trash);
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);
   playList.appendChild(tr);

   var okButton = document.querySelector(".ion-checkmark-round");
   okButton.addEventListener("click", function(){
       var inputField = document.querySelector(".new-playlist-item").value;
       title.innerHTML = "";
       title.textContent = inputField;
       td2.innerHTML = "";
       td3.appendChild(trash);
       isPushed = false;
   });
   td3.addEventListener("click", function(){
       playList.removeChild(tr);
   });
}}
addPlaylist()

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
