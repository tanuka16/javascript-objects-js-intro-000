var playlist = {
  Taylor : "Back to December"
}
//                       object, key(string), value
function updatePlaylist(playlist, artistName, songTitle){
  playlist [artistName] = "songTitle"
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Taylor;
  delete playlist.artistName;
  return playlist;

}
