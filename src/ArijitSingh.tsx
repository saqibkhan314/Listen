// import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { arijitList } from '../assets/songs/ArijitSongs';
// import TrackPlayer,{AddTrack, State, Track} from 'react-native-track-player';

// const screenHeight = Dimensions.get('window').height;

// export default function ArijitSingh() {

//   const currentState = async (item: any) => {
//     const state = await TrackPlayer.getState();
//     if(state === State.Playing){
//       console.log("playing");
//       await TrackPlayer.stop(); // Stop current track
//       await TrackPlayer.reset(); // Reset player
//       await TrackPlayer.add(item); // Add the selected song
//       await TrackPlayer.play();
//     }
//     else if(state === State.Paused){
//       console.log("Pausevbxfvbd")
    
//     }
//     else if(state === State.Ready){
//       await TrackPlayer.add(arijitList);
//       await TrackPlayer.play();
//       console.log("any state",state)
//     }
//   }

//   return (
//     <View style={styles.body}>
//       <View style={styles.container}>
//         <Image
//           source={{
//             uri: "https://imgs.search.brave.com/YSTApDgAnaIleb_2pzlyZJs28x7-QwClAUJXYNwLHWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHd6bXN2cDdm/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8vY19j/cm9wLGdfY3VzdG9t/L3YxNzI4NDYyNzAx/L3lpd3dscmJlNzhh/aGhvaGpqbXVtLmpw/Zw",
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.text}>Top Songs</Text>
//         <FlatList
//           data={arijitList}
//           keyExtractor={(item) => {
//             return item.id;
//           }}
//           renderItem={({ item }) =>  (
//             <TouchableOpacity 
//               onPress={ () => currentState(item)}
//             >
//               <View style={styles.songContainer}>
//                 <Image source={{ uri: item.artwork }} style={styles.songImage} />
//                 <View style={styles.songDetails}>
//                   <Text style={styles.songTitle}>{item.title}</Text>
//                   <Text style={styles.songArtist}>{item.artist}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     backgroundColor: '#004953',
//   },
//   container: {
//     flex: 1,
//   },
//   image: {
//     height: screenHeight * 0.4, // 40% of screen height
//     width: '100%', // Full screen width
//     resizeMode: 'cover',
//   },
//   text: {
//     textAlign: 'left',
//     fontSize: 25,
//     marginTop: 10,
//     padding: 10,
//     color: 'white',
//   },
//   songContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     alignItems: 'center',
//   },
//   songImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   songDetails: {
//     marginLeft: 10,
//   },
//   songTitle: {
//     fontSize: 16,
//     color: 'white',
//   },
//   songArtist: {
//     fontSize: 14,
//     color: 'gray',
//   },
// });









// import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { arijitList } from '../assets/songs/ArijitSongs';
// import TrackPlayer, { State, Event, useTrackPlayerEvents } from 'react-native-track-player';
// import SongSlider from '../components/SongSlider';
// import ControlCenter from '../components/ControlCenter';
// import SongInfo from '../components/SongInfo';

// const screenHeight = Dimensions.get('window').height;

// export default function ArijitSingh() {


//   // console.log(arijitList);
  
//   const currentState = async (item:any) => {
//     const state = await TrackPlayer.getState();
//     if(state === State.Playing){
//       console.log("playing");
//       await TrackPlayer.stop(); // Stop current track
//       await TrackPlayer.reset(); // Reset player
//       await TrackPlayer.add(item); // Add the selected song
//       await TrackPlayer.play();
//     }
//     else if(state === State.Paused){
//       console.log("Paused");
//     }
//     else if(state === State.Ready){
//       console.log("Ready");
//       await TrackPlayer.add(item); // Add the selected song
//       await TrackPlayer.play();
//     }
//     else {
//       console.log(state);
//     }
//     useTrackPlayerEvents([Event.END_OF_TRACK], async (event) => {
//       if (event.type === Event.END_OF_TRACK) {
//         const nextTrackIndex = (arijitList.findIndex(track => track.id === item.id) + 1) % arijitList.length;
//         const nextTrack = arijitList[nextTrackIndex];
//         if(nextTrack){
//           await TrackPlayer.add(nextTrack);
//           await TrackPlayer.play();
//         }
//         else{
//           await TrackPlayer.add(item);
//           await TrackPlayer.play();
//         }
//       }
//     });
//   }

// //   useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
// //     if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
// //         const track = await TrackPlayer.getTrack(event.nextTrack);
// //     }
// // });


  

//   return (
//     <View style={styles.body}>
//       <View style={styles.container}>
//         <Image
//           source={{
//             uri: "https://imgs.search.brave.com/YSTApDgAnaIleb_2pzlyZJs28x7-QwClAUJXYNwLHWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHd6bXN2cDdm/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8vY19j/cm9wLGdfY3VzdG9t/L3YxNzI4NDYyNzAx/L3lpd3dscmJlNzhh/aGhvaGpqbXVtLmpw/Zw",
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.text}>Top Songs</Text>
//         <FlatList
//           data={arijitList}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) =>  (
//             <TouchableOpacity 
//               onPress={ () => currentState(item)}
//             >
//               <View style={styles.songContainer}>
//                 <Image source={{ uri: item.artwork }} style={styles.songImage} />
//                 <View style={styles.songDetails}>
//                   <Text style={styles.songTitle}>{item.title}</Text>
//                   <Text style={styles.songArtist}>{item.artist}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     backgroundColor: '#004953',
//   },
//   container: {
//     flex: 1,
//   },
//   image: {
//     height: screenHeight * 0.4, // 40% of screen height
//     width: '100%', // Full screen width
//     resizeMode: 'cover',
//   },
//   text: {
//     textAlign: 'left',
//     fontSize: 25,
//     marginTop: 10,
//     padding: 10,
//     color: 'white',
//   },
//   songContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     alignItems: 'center',
//   },
//   songImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   songDetails: {
//     marginLeft: 10,
//   },
//   songTitle: {
//     fontSize: 16,
//     color: 'white',
//   },
//   songArtist: {
//     fontSize: 14,
//     color: 'gray',
//   },
// });











// import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import { arijitList } from '../assets/songs/ArijitSongs';
// import TrackPlayer, { Event, State, Track, useTrackPlayerEvents } from 'react-native-track-player';

// const screenHeight = Dimensions.get('window').height;

// // const allTrack = arijitList;
// // export async function currentState(item: any): Promise<void> {
// //   const state = await TrackPlayer.getState(); // Get the current state of the track player
// //   console.log("item",item.id);
  
// //   if (state === State.Playing) {
// //     console.log('Playing');
// //     await TrackPlayer.stop();
// //     await TrackPlayer.reset();
// //     await TrackPlayer.add(item);
// //     await TrackPlayer.play();
// //   } else if (state === State.Paused) {
// //     console.log('Paused');
// //   } else if (state === State.Ready) {
// //     console.log('Ready');
// //     const initialTrackPlayingIndex = item.id -1
// //     console.log(initialTrackPlayingIndex);
    
// //     // console.log(allTrack);
    
// //     if (initialTrackPlayingIndex === 0) {
// //       await TrackPlayer.add(allTrack[initialTrackPlayingIndex])
// //       await TrackPlayer.play()
// //     }
// //     else{
// //       await TrackPlayer.add(allTrack[initialTrackPlayingIndex])
// //       await TrackPlayer.play()
// //     }
    
// //   } else if (state === 'none') {
// //     console.log(state);
// //     await TrackPlayer.add(item);
// //     await TrackPlayer.play();
// //   }
// // }







// let initialTrackPlayingIndex

// const allTrack = arijitList;
// async function currentState(item: any): Promise<void> {
   
//   const state = await TrackPlayer.getState(); // Get the current state of the track player
//   // console.log(initialTrackPlayingIndex);
  
//   console.log("item", item.id);
//   // console.log("trackplayer:",TrackPlayer);
  
  
//   if (state === State.Playing) {
//     console.log('Playing');
//     await TrackPlayer.stop();
//     await TrackPlayer.reset();
//     await TrackPlayer.add(item);
//     await TrackPlayer.play();
    
//   } else if (state === State.Paused) {
//     console.log('Paused');

//   } else if (state === State.Ready) {
//     console.log('FullyReady');
//     initialTrackPlayingIndex = item.id - 1   ;
//     console.log(initialTrackPlayingIndex);

//     // Clear the queue and add only the selected track
//     await TrackPlayer.reset(); 
//     await TrackPlayer.add(allTrack[initialTrackPlayingIndex]);
//     await TrackPlayer.play();
//     // ArijitSingh(initialTrackPlayingIndex)
//   } else if (state === 'none') {
//     console.log(state);
//     await TrackPlayer.add(item);
//     await TrackPlayer.play();
//   }
// }


// // ArijitSingh()


// export default function ArijitSingh() {

//   // const [initialTrackPlayingIndex, setInitialTrackPlayingIndex] = useState(item.id);
  
  


//   // useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
//   //   if (event.type === Event.PlaybackTrackChanged) {
//   //     const currentTrack = await TrackPlayer.getCurrentTrack();
//   //     console.log("Current Track ID:",currentTrack);
      
//   //     const nextTrackIndex = (arijitList.findIndex((track) => track.id === currentTrack) + 1) % arijitList.length;
//   //     console.log("next track index:",nextTrackIndex );
      
//   //     const nextTrack = arijitList[nextTrackIndex];
//   //     if (nextTrack) {
//   //       console.log("NEXT TRACK:",nextTrack);
        
//   //       await TrackPlayer.add(nextTrack);
//   //       await TrackPlayer.play();
//   //     } else {
//   //       await TrackPlayer.add(arijitList[0]); // Loop back to the first track
//   //       await TrackPlayer.play();
//   //     }
//   //   }
//   // });

//   const [track, setTrack] = useState<Track | null>()
  
//     useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
//       switch (event.type) {
//         case Event.PlaybackTrackChanged:
//            const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
//            setTrack(playingTrack)
//           break;
//       }
//     }) 

//   return (
//     <View style={styles.body}>
//       <View style={styles.container}>
//         <Image
//           source={{
//             uri: 'https://imgs.search.brave.com/YSTApDgAnaIleb_2pzlyZJs28x7-QwClAUJXYNwLHWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHd6bXN2cDdm/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8vY19j/cm9wLGdfY3VzdG9t/L3YxNzI4NDYyNzAx/L3lpd3dscmJlNzhh/aGhvaGpqbXVtLmpw/Zw',
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.text}>Top Songs</Text>
//         <FlatList
//           data={arijitList}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => currentState(item)}>
//               <View style={styles.songContainer}>
//                 <Image source={{ uri: item.artwork }} style={styles.songImage} />
//                 <View style={styles.songDetails}>
//                   <Text style={styles.songTitle}>{item.title}</Text>
//                   <Text style={styles.songArtist}>{item.album}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     backgroundColor: '#004953',
//   },
//   container: {
//     flex: 1,
//   },
//   image: {
//     height: screenHeight * 0.4, // 40% of screen height
//     width: '100%', // Full screen width
//     resizeMode: 'cover',
//   },
//   text: {
//     textAlign: 'left',
//     fontSize: 25,
//     marginTop: 10,
//     padding: 10,
//     color: 'white',
//   },
//   songContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     alignItems: 'center',
//   },
//   songImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   songDetails: {
//     marginLeft: 10,
//   },
//   songTitle: {
//     fontSize: 16,
//     color: 'white',
//   },
//   songArtist: {
//     fontSize: 14,
//     color: '#FFFDD0',
//   },
// });













// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
// import { arijitList } from '../assets/songs/ArijitSongs';
// import TrackPlayer, { Event, State, useTrackPlayerEvents } from 'react-native-track-player';

// const screenHeight = Dimensions.get('window').height;

// export default function ArijitSingh() {
//   const [initialTrackPlayingId, setInitialTrackPlayingId] = useState(0); // State to persist index

//   const allTrack = arijitList;
//   // useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
//   //   if (event.type === Event.PlaybackTrackChanged) {
//   //     const currentTrack = initialTrackPlayingIndex
//   //     console.log("Current Track ID:", currentTrack);
//   //     console.log("initialTrackPlayingIndex: ",initialTrackPlayingIndex);
//   //     let nextTrackIndex;
//   //     if (currentTrack !== null) {
//   //       nextTrackIndex = (arijitList.findIndex((track) => track.id === currentTrack) + 1) % arijitList.length;
//   //       console.log("nextTrackIndex:", nextTrackIndex);
        
//   //     } else {
//   //       nextTrackIndex = initialTrackPlayingIndex; // Loop back to the first track
//   //     }

//   //     console.log("next track index:", nextTrackIndex);
//   //     const nextTrack = arijitList[nextTrackIndex];
//   //     if (nextTrack) {
//   //       console.log("NEXT TRACK:", nextTrack);

//   //       await TrackPlayer.add(nextTrack);
//   //       await TrackPlayer.play();
//   //     } else {
//   //       await TrackPlayer.add(arijitList[0]); // Loop back to the first track
//   //       await TrackPlayer.play();
//   //     }
//   //   }
//   // });

//   // useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
//   //   if (event.type === Event.PlaybackTrackChanged) {
//   //     const currentTrackId = initialTrackPlayingId; // Track the currently playing index
//   //     console.log("Current Track ID:", currentTrackId);
  
      
  
//   //     if (currentTrackId === arijitList.length) {
//   //       // Calculate the next track index
//   //       // nextTrackIndex = (currentTrackIndex + 1) % arijitList.length;
  
//   //       // console.log("Next Track Index:", nextTrackIndex);
//   //       // console.log("Next Track:", arijitList[nextTrackIndex]);

//   //       console.log("Track will be Stopped after this:",currentTrackId);
//   //       await TrackPlayer.add(arijitList[currentTrackId-1]);
//   //       await TrackPlayer.play();
//   //       await TrackPlayer.stop();
        
  
//   //       // Update the state for the new track
//   //       // setInitialTrackPlayingIndex(nextTrackIndex);
  
//   //       // Play the next track
//   //       await TrackPlayer.reset();
//   //       // await TrackPlayer.add(arijitList[nextTrackIndex]);
//   //       // await TrackPlayer.play();
//   //     } else {
        
//   //       const nextTrackId = currentTrackId + 1;
//   //       await TrackPlayer.reset();
//   //       await TrackPlayer.add(arijitList[nextTrackId]);
//   //       await TrackPlayer.play();
        
//   //       // console.error("No current track index found. Resetting to the first track.");
//   //       // setInitialTrackPlayingIndex(0);
        
        
//   //       // await TrackPlayer.play();
//   //     }
//   //   }
//   // });
  


//   useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
//     if (event.type === Event.PlaybackTrackChanged) {
//       const currentTrackId = initialTrackPlayingId; // Track the currently playing ID
//       console.log("Current Track ID:", currentTrackId);
  
//       // Check if the current track is the last one in the list
//       if (currentTrackId === arijitList.length) {
//         console.log("End of playlist reached. Stopping playback.");
//         await TrackPlayer.stop(); // Stop playback
//       } else {
//         // Play the next track
//         const nextTrackId = currentTrackId + 1;
//         console.log("Next Track ID:", nextTrackId);
  
//         setInitialTrackPlayingId(nextTrackId); // Update the state for the next track
  
//         await TrackPlayer.reset(); // Clear current queue
//         await TrackPlayer.add(arijitList[nextTrackId - 1]); // Add the next track (adjust for 0-based indexing)
//         await TrackPlayer.play(); // Start playback
//       }
//     }
//   });
  


//   async function currentState(item: any): Promise<void> {
   
//       const state = await TrackPlayer.getState(); // Get the current state of the track player
//       // console.log(initialTrackPlayingIndex);
      
//       console.log("item", item.id);
//       console.log(item);
      
//       // console.log("trackplayer:",TrackPlayer);
      
      
//       if (state === State.Playing) {
//         console.log('Playing');
//         await TrackPlayer.stop();
//         await TrackPlayer.reset();
//         await TrackPlayer.add(item);
//         await TrackPlayer.play();
        
//       } else if (state === State.Paused) {
//         console.log('Paused');
    
//       } else if (state === State.Ready) {
//         console.log('FullyReady');
//         // const newIndex = item.id - 1;
//         setInitialTrackPlayingId(item.id)
//         // console.log("Using newIndex:", newIndex);
//         // console.log(setInitialTrackPlayingIndex(item.id - 1));
//         console.log(initialTrackPlayingId);
    
//         // Clear the queue and add only the selected track
//         await TrackPlayer.reset(); 
//         await TrackPlayer.add(item);
//         await TrackPlayer.play();
//         // ArijitSingh(initialTrackPlayingIndex)
//       } else if (state === 'none') {
//         console.log(state);
//         await TrackPlayer.add(item);
//         await TrackPlayer.play();
//       }
//     }
    

//   return (
//     <View style={styles.body}>
//       <View style={styles.container}>
//         <Image
//           source={{
//             uri: 'https://imgs.search.brave.com/YSTApDgAnaIleb_2pzlyZJs28x7-QwClAUJXYNwLHWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHd6bXN2cDdm/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8vY19j/cm9wLGdfY3VzdG9t/L3YxNzI4NDYyNzAx/L3lpd3dscmJlNzhh/aGhvaGpqbXVtLmpw/Zw',
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.text}>Top Songs</Text>
//         <FlatList
//           data={arijitList}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => currentState(item)}>
//               <View style={styles.songContainer}>
//                 <Image source={{ uri: item.artwork }} style={styles.songImage} />
//                 <View style={styles.songDetails}>
//                   <Text style={styles.songTitle}>{item.title}</Text>
//                   <Text style={styles.songArtist}>{item.album}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     backgroundColor: '#004953',
//   },
//   container: {
//     flex: 1,
//   },
//   image: {
//     height: screenHeight * 0.4,
//     width: '100%',
//     resizeMode: 'cover',
//   },
//   text: {
//     textAlign: 'left',
//     fontSize: 25,
//     marginTop: 10,
//     padding: 10,
//     color: 'white',
//   },
//   songContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     alignItems: 'center',
//   },
//   songImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   songDetails: {
//     marginLeft: 10,
//   },
//   songTitle: {
//     fontSize: 16,
//     color: 'white',
//   },
//   songArtist: {
//     fontSize: 14,
//     color: '#FFFDD0',
//   },
// });
















// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
// import { arijitList } from '../assets/songs/ArijitSongs';
// import TrackPlayer, { Event, State, useTrackPlayerEvents } from 'react-native-track-player';

// const screenHeight = Dimensions.get('window').height;

// export default function ArijitSingh() {
//   const [initialTrackPlayingId, setInitialTrackPlayingId] = useState(0);

//   // Handle sequential playback and stopping at the end
//   useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
//     if (event.type === Event.PlaybackTrackChanged) {
//       const currentIndex = await TrackPlayer.getCurrentTrack();
//       const queue = await TrackPlayer.getQueue();

//       console.log("Queue:", queue);
      
//       console.log("Current Track Index:", currentIndex);

//       if (currentIndex === queue.length - 1) {
//         console.log("End of playlist reached. Stopping playback.");
//         await TrackPlayer.play();
//         await TrackPlayer.stop();
//       } else {
//         console.log("Playing next track.");
//         await TrackPlayer.play();
//       }
//     }
//   });

//   // Handle playback when a user selects a specific song
//   async function currentState(item: any): Promise<void> {
//     const state = await TrackPlayer.getState();

//     console.log("State:", state);
//     console.log("item id:",item.id);
    
    
//     if (state === State.Playing || state === State.Paused || state === State.Ready) {
//       // Stop and reset the player
//       await TrackPlayer.stop();
//       await TrackPlayer.reset();
//     }

//     // Find the clicked track and set the queue starting from that track
//     const trackIndex = arijitList.findIndex((track) => track.id === item.id);
//     if (trackIndex !== -1) {
//       console.log("Starting playback from track:", trackIndex);

//       // Add tracks to the queue starting from the selected track
//       const tracksToPlay = arijitList.slice(trackIndex);
//       setInitialTrackPlayingId(item.id);
//       await TrackPlayer.add(tracksToPlay);
//       await TrackPlayer.play();
//     } else {
//       console.error("Track not found in the list.");
//     }
//   }

//   return (
//     <View style={styles.body}>
//       <View style={styles.container}>
//         <Image
//           source={{
//             uri: 'https://imgs.search.brave.com/YSTApDgAnaIleb_2pzlyZJs28x7-QwClAUJXYNwLHWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHd6bXN2cDdm/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8vY19j/cm9wLGdfY3VzdG9t/L3YxNzI4NDYyNzAx/L3lpd3dscmJlNzhh/aGhvaGpqbXVtLmpw/Zw',
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.text}>Top Songs</Text>
//         <FlatList
//           data={arijitList}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => currentState(item)}>
//               <View style={styles.songContainer}>
//                 <Image source={{ uri: item.artwork }} style={styles.songImage} />
//                 <View style={styles.songDetails}>
//                   <Text style={styles.songTitle}>{item.title}</Text>
//                   <Text style={styles.songArtist}>{item.album}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     backgroundColor: '#004953',
//   },
//   container: {
//     flex: 1,
//   },
//   image: {
//     height: screenHeight * 0.4,
//     width: '100%',
//     resizeMode: 'cover',
//   },
//   text: {
//     textAlign: 'left',
//     fontSize: 25,
//     marginTop: 10,
//     padding: 10,
//     color: 'white',
//   },
//   songContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     alignItems: 'center',
//   },
//   songImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   songDetails: {
//     marginLeft: 10,
//   },
//   songTitle: {
//     fontSize: 16,
//     color: 'white',
//   },
//   songArtist: {
//     fontSize: 14,
//     color: '#FFFDD0',
//   },
// });







//MAIN CODE





import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { arijitList } from './assets/songs/ArijitSongs';
import TrackPlayer, { Event, State, useTrackPlayerEvents } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './App';
import { StackNavigationProp } from '@react-navigation/stack';


const screenHeight = Dimensions.get('window').height;

export default function ArijitSingh() {
  // type RootStackParamList = {
  //   ArijitSingh: undefined;
  //   PlayerScreen: { track: any };
  // };
  type NavigationProp = StackNavigationProp<RootStackParamList, 'ArijitSingh'>;
  const navigation = useNavigation<NavigationProp>();
  const [initialTrackPlayingId, setInitialTrackPlayingId] = useState(0);

  // Handle sequential playback and stopping at the end
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async () => {
    const currentIndex = await TrackPlayer.getCurrentTrack();
    const queue = await TrackPlayer.getQueue();

    // console.log('Queue:', queue);
    console.log('Current Track Index:', currentIndex);

    if (currentIndex === queue.length - 1) {
      console.log('End of playlist reached. Stopping playback.');
      // await TrackPlayer.stop(); // Stop playback after the last track
    } else {
      console.log('Playing next track.');
      await TrackPlayer.play(); // Continue to the next track
    }
  });

  // Handle playback when a user selects a specific song
  async function currentState(item: any): Promise<void> {
    const state = await TrackPlayer.getState();

    console.log('State:', state);
    console.log('Item ID:', item.id);

    if (state === State.Playing || state === State.Paused || state === State.Ready) {
      // Stop and reset the player
      await TrackPlayer.stop();
      await TrackPlayer.reset();
    }
    if (state === State.Ended) {
      console.log('Playback ended. Starting from the selected track.');
      await TrackPlayer.reset();
    }

    // Find the clicked track and set the queue starting from that track
    const trackIndex = arijitList.findIndex((track) => track.id === item.id);
    if (trackIndex !== -1) {
      console.log('Starting playback from track:', trackIndex);

      // Add tracks to the queue starting from the selected track
      const tracksToPlay = arijitList.slice(trackIndex);
      setInitialTrackPlayingId(item.id);
      await TrackPlayer.add(tracksToPlay);
      await TrackPlayer.play();
      navigation.navigate('PlayerScreen', { track: item });
    } else {
      console.error('Track not found in the list.');
    }
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/YSTApDgAnaIleb_2pzlyZJs28x7-QwClAUJXYNwLHWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHd6bXN2cDdm/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8vY19j/cm9wLGdfY3VzdG9t/L3YxNzI4NDYyNzAx/L3lpd3dscmJlNzhh/aGhvaGpqbXVtLmpw/Zw',
          }}
          style={styles.image}
        />
        <Text style={styles.text}>Top Songs</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={arijitList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => currentState(item)}>
              <View style={styles.songContainer}>
                <Image source={{ uri: item.artwork }} style={styles.songImage} />
                <View style={styles.songDetails}>
                  <Text style={styles.songTitle}>{item.title}</Text>
                  <Text style={styles.songArtist}>{item.album}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* <ControlCenter />
      <SongSlider /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#004953',
  },
  container: {
    flex: 1,
  },
  image: {
    height: screenHeight * 0.4,
    width: '100%',
    resizeMode: 'cover',
  },
  text: {
    textAlign: 'left',
    fontSize: 25,
    marginTop: 10,
    padding: 10,
    color: 'white',
  },
  songContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  songDetails: {
    marginLeft: 10,
  },
  songTitle: {
    fontSize: 16,
    color: 'white',
  },
  songArtist: {
    fontSize: 14,
    color: '#FFFDD0',
  },
});




// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
// import { arijitList } from '../../assets/songs/ArijitSongs';
// import TrackPlayer, { Event, State, useTrackPlayerEvents } from 'react-native-track-player';
// import SongSlider from '../../components/SongSlider'; // Import SongSlider
// import ControlCenter from '../../components/ControlCenter'; // Import ControlCenter

// const screenHeight = Dimensions.get('window').height;

// export default function ArijitSingh() {
//   const [initialTrackPlayingId, setInitialTrackPlayingId] = useState(0);

//   // Handle sequential playback and stopping at the end
//   useTrackPlayerEvents([Event.PlaybackTrackChanged], async () => {
//     const currentIndex = await TrackPlayer.getCurrentTrack();
//     const queue = await TrackPlayer.getQueue();

//     if (currentIndex === queue.length - 1) {
//       await TrackPlayer.stop();
//     } else {
//       await TrackPlayer.play();
//     }
//   });

//   // Handle playback when a user selects a specific song
//   async function currentState(item: any): Promise<void> {
//     const state = await TrackPlayer.getState();

//     if (state === State.Playing || state === State.Paused || state === State.Ready) {
//       await TrackPlayer.stop();
//       await TrackPlayer.reset();
//     }
//     if (state === State.Ended) {
//       await TrackPlayer.reset();
//     }

//     const trackIndex = arijitList.findIndex((track) => track.id === item.id);
//     if (trackIndex !== -1) {
//       const tracksToPlay = arijitList.slice(trackIndex);
//       setInitialTrackPlayingId(item.id);
//       await TrackPlayer.add(tracksToPlay);
//       await TrackPlayer.play();
//     }
//   }

//   return (
//     <View style={styles.body}>
//       <View style={styles.container}>
//         <Image
//           source={{
//             uri: 'https://imgs.search.brave.com/YSTApDgAnaIleb_2pzlyZJs28x7-QwClAUJXYNwLHWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHd6bXN2cDdm/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8vY19j/cm9wLGdfY3VzdG9t/L3YxNzI4NDYyNzAx/L3lpd3dscmJlNzhh/aGhvaGpqbXVtLmpw/Zw',
//           }}
//           style={styles.image}
//         />
//         <Text style={styles.text}>Top Songs</Text>
//         <FlatList
//           data={arijitList}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => currentState(item)}>
//               <View style={styles.songContainer}>
//                 <Image source={{ uri: item.artwork }} style={styles.songImage} />
//                 <View style={styles.songDetails}>
//                   <Text style={styles.songTitle}>{item.title}</Text>
//                   <Text style={styles.songArtist}>{item.album}</Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     backgroundColor: '#004953',
//   },
//   container: {
//     flex: 1,
//   },
//   image: {
//     height: screenHeight * 0.4,
//     width: '100%',
//     resizeMode: 'cover',
//   },
//   text: {
//     textAlign: 'left',
//     fontSize: 25,
//     marginTop: 10,
//     padding: 10,
//     color: 'white',
//   },
//   songContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     alignItems: 'center',
//   },
//   songImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   songDetails: {
//     marginLeft: 10,
//   },
//   songTitle: {
//     fontSize: 16,
//     color: 'white',
//   },
//   songArtist: {
//     fontSize: 14,
//     color: '#FFFDD0',
//   },
// });











