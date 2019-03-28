var playlist = {
  Taylor : "Back to December"
  //Williams : "Happy"
}
//                       object, key(string), value
function updatePlaylist(playlist, artistName, songTitle){
  playlist [artistName] = "songTitle"
  return playlist
}

object removeFromPlaylist(playlist, artistName){
  //delete playlist.Taylor;
  //delete playlist['Taylor']
  delete playlist.artistName
  console.log(playlist.artistName);

}
