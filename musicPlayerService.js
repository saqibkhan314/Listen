// import TrackPlayer, { RepeatMode,Event} from "react-native-track-player";
// import { playListData } from "./src/constants";

// import { arijitList } from "./src/assets/songs/ArijitSongs";

// export async function setupPlayer(){//use to check whether the trackplayer is ready or not
//  let isSetUp = false
// try {
//   await TrackPlayer.getCurrentTrack() //getCurrentTrack() => if track player is ready then it return id of that current track 
//   isSetUp = true
// } catch (error) {
//   await TrackPlayer.setupPlayer()
//   isSetUp = true
// }
// finally{
//   // console.log("isSetUp",isSetUp)
//   return isSetUp
  
  
// }
// }

// // export async function addTrack() {
// //   await TrackPlayer.add(arijitList)//adds array of tracks to track player
// //   await TrackPlayer.setRepeatMode(RepeatMode.Queue)
// // }

// export async function playBackService() {
//   TrackPlayer.addEventListener(Event.RemotePause, () => {
//     TrackPlayer.pause()
//   })
//   TrackPlayer.addEventListener(Event.RemotePlay, () => {
//     TrackPlayer.play()
//   })
//   TrackPlayer.addEventListener(Event.RemoteNext, () => {
//     TrackPlayer.skipToNext()
//   })
//   TrackPlayer.addEventListener(Event.RemotePrevious, () => {
//     TrackPlayer.skipToPrevious()
//   })
  

// }






import TrackPlayer, { RepeatMode, Event } from "react-native-track-player";
import { arijitList } from "./src/assets/songs/ArijitSongs";

export async function setupPlayer() {
  let isSetUp = false;
  try {
    await TrackPlayer.getCurrentTrack(); // Check if TrackPlayer is ready
    isSetUp = true;
  } catch (error) {
    await TrackPlayer.setupPlayer(); // Setup TrackPlayer if not already setup
    await TrackPlayer.add(arijitList); // Add your songs to the player
    isSetUp = true;
  } finally {
    return isSetUp;
  }
}

export async function playBackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });

  // Ensure that repeat mode and other controls are managed
  TrackPlayer.setRepeatMode(RepeatMode.Off); // Example, adjust based on your needs
}
