







//MAIN CODE





// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
// import { arijitList } from './assets/songs/ArijitSongs';
// import TrackPlayer, { Event, State, useTrackPlayerEvents, usePlaybackState } from 'react-native-track-player';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from './App';
// import { StackNavigationProp } from '@react-navigation/stack';
// // import { usePlaybackState } from 'react-native-track-player/lib/src/trackPlayer';


// const screenHeight = Dimensions.get('window').height;

// export default function ArijitSingh() {
//   // type RootStackParamList = {
//   //   ArijitSingh: undefined;
//   //   PlayerScreen: { track: any };
//   // };
//   type NavigationProp = StackNavigationProp<RootStackParamList, 'ArijitSingh'>;
//   const navigation = useNavigation<NavigationProp>();
//   const [initialTrackPlayingId, setInitialTrackPlayingId] = useState(0);
//   const playBackState = usePlaybackState()
//   let queue, currentIndex: number | null

//   // Handle sequential playback and stopping at the end
//   useTrackPlayerEvents([Event.PlaybackTrackChanged], async () => {
//      currentIndex = await TrackPlayer.getCurrentTrack();
//      queue = await TrackPlayer.getQueue();
   
//     console.log('Queue:', queue);
//     console.log('Current Track Index:', currentIndex);

//     if (currentIndex === queue.length - 1) {
//       console.log('End of playlist reached. Stopping playback.');
//       // await TrackPlayer.stop(); // Stop playback after the last track
//     } else {
//       console.log('Playing next track.');
//       await TrackPlayer.play(); // Continue to the next track
//     }
//   });

//   // Handle playback when a user selects a specific song
//   let trackIndex: number | null | undefined
//   async function currentState(item: any): Promise<void> {
//     const state = await TrackPlayer.getState();

//     console.log('State:', state);
//     console.log('Item ID:', item.id);

    // if (state === State.Playing || state === State.Paused || state === State.Ready) {
    //   // Stop and reset the player
    //   await TrackPlayer.stop();
    //   await TrackPlayer.reset();
//     }
//     if (state === State.Ended) {
//       console.log('Playback ended. Starting from the selected track.');
//       await TrackPlayer.reset();
//     }

//     // Find the clicked track and set the queue starting from that track
//     trackIndex = arijitList.findIndex((track) => track.id === item.id);
//     console.log("TrackIndex:",trackIndex);
    
//     if (trackIndex !== -1) {
//       console.log('Starting playback from track:', trackIndex);

//       // Add tracks to the queue starting from the selected track
//       const tracksToPlay = arijitList.slice(trackIndex);
//       setInitialTrackPlayingId(item.id);
//       await TrackPlayer.add(tracksToPlay);
//       await TrackPlayer.play();
//       navigation.navigate('PlayerScreen', { track: item });
//     } else {
//       console.error('Track not found in the list.');
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
//           showsVerticalScrollIndicator={false}
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
                
//                 {trackIndex === currentIndex && State.Playing === playBackState.state && 
//                   (<Image
                  
//                   source={require('./images/flash.png')}
//                   style={styles.playingDesign}
//                   />)}
                

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
//   playingDesign:{
//     width:18,
//     height:18,
//     tintColor:'white'
//   }
// });




// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
// import { arijitList } from './assets/songs/ArijitSongs';
// import TrackPlayer, { Event, State, useTrackPlayerEvents, usePlaybackState } from 'react-native-track-player';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from './App';
// import { StackNavigationProp } from '@react-navigation/stack';

// const screenHeight = Dimensions.get('window').height;

// export default function ArijitSingh() {
//   type NavigationProp = StackNavigationProp<RootStackParamList, 'ArijitSingh'>;
//   const navigation = useNavigation<NavigationProp>();
//   const [initialTrackPlayingId, setInitialTrackPlayingId] = useState(0);
//   const playBackState = usePlaybackState();

//   // let queue, currentIndex: number | null;

//   // Handle sequential playback and stopping at the end
//   useTrackPlayerEvents([Event.PlaybackTrackChanged], async () => {
//     const currentIndex = await TrackPlayer.getCurrentTrack();
//     const queue = await TrackPlayer.getQueue();

//     console.log('Queue:', queue);
//     console.log('Current Track Index:', currentIndex);

//     if (currentIndex === queue.length - 1) {
//       console.log('End of playlist reached. Stopping playback.');
//     } else {
//       console.log('Playing next track.');
//       await TrackPlayer.play();
//     }
//   });

//   // Handle playback when a user selects a specific song
//   // let trackIndex: number | null | undefined;
//   async function currentState(item: any): Promise<void> {
//     const state = await TrackPlayer.getState();

//     console.log('State:', state);
//     console.log('Item ID:', item.id);

//     if (state === State.Playing || state === State.Paused || state === State.Ready) {
//       // Stop and reset the player
//       await TrackPlayer.stop();
//       await TrackPlayer.reset();
//     }
//     if (state === State.Ended) {
//       console.log('Playback ended. Starting from the selected track.');
//       await TrackPlayer.reset();
//     }

//     // Find the clicked track and set the queue starting from that track
//     const trackIndex = arijitList.findIndex((track) => track.id === item.id);
//     console.log('TrackIndex:', trackIndex);

//     if (trackIndex !== -1) {
//       console.log('Starting playback from track:', trackIndex);

//       // Add tracks to the queue starting from the selected track
//       const tracksToPlay = arijitList.slice(trackIndex);
//       setInitialTrackPlayingId(item.id);
//       await TrackPlayer.add(tracksToPlay);
//       await TrackPlayer.play();
//       navigation.navigate('PlayerScreen', { track: item });
//     } else {
//       console.error('Track not found in the list.');
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
//           showsVerticalScrollIndicator={false}
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

//                 {/* Flash image beside the currently playing track */}
//                 {(item.id === initialTrackPlayingId && playBackState.state === State.Playing) && (
//                   <Image
//                     source={require('./images/flash.png')}
//                     style={styles.playingDesign}
//                   />
//                 )}
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
//   playingDesign: {
//     width: 18,
//     height: 18,
//     tintColor: 'white',
//   },
// });






// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
// import { arijitList } from './assets/songs/ArijitSongs';
// import TrackPlayer, { Event, State, useTrackPlayerEvents, usePlaybackState } from 'react-native-track-player';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from './App';
// import { StackNavigationProp } from '@react-navigation/stack';

// const screenHeight = Dimensions.get('window').height;

// export default function ArijitSingh() {
//   type NavigationProp = StackNavigationProp<RootStackParamList, 'ArijitSingh'>;
//   const navigation = useNavigation<NavigationProp>();
//   const [initialTrackPlayingId, setInitialTrackPlayingId] = useState<string | null>(null);
//   const playBackState = usePlaybackState();

//   // Update track ID automatically on track changes
//   // useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
//   //   if (event.nextTrack !== undefined) {
//   //     const track = await TrackPlayer.getTrack(event.nextTrack);
//   //     if (track?.id) {
//   //       setInitialTrackPlayingId(track.id);
//   //     }
//   //   }
//   // });

  
//   useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
//     if(event.nextTrack !== undefined){
//       const track = await TrackPlayer.getTrack(event.nextTrack)
//       console.log("trackId:", track?.id );
//       // const currentIndex = arijitList.findIndex( (currTrack) => currTrack.track?.id)
//       // console.log("currentIndex",currentIndex);
      
      
//       if(track?.id){
//         setInitialTrackPlayingId(track.id)
//       }
//     }
//   })

//   // const currentIndex = arijitList.findIndex( (currTrack) => currTrack.initialTrackPlayingId)

//   // console.log("currentIndex",currentIndex);
  

//   // Handle playback when a user selects a specific song
//   async function currentState(item: any): Promise<void> {
//     const state = await TrackPlayer.getState();

//     if (state === State.Playing || state === State.Paused || state === State.Ready) {
//       await TrackPlayer.stop();
//       await TrackPlayer.reset();
//     }

//       const trackIndex = arijitList.findIndex((track) => track.id === item.id);
//       console.log("itemId:",item.id);
//       console.log("item:", item);
      
      
//     if (trackIndex !== -1) {
//       const tracksToPlay = arijitList.slice(trackIndex);
//       setInitialTrackPlayingId(item.id);
//       await TrackPlayer.add(tracksToPlay);
//       await TrackPlayer.play();
//       navigation.navigate('PlayerScreen', { track: item });
//     } else {
//       console.error('Track not found in the list.');
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
//           showsVerticalScrollIndicator={false}
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

//                 {/* Flash image beside the currently playing track */}
//                 {(item.id === initialTrackPlayingId && playBackState.state === State.Playing) && (
//                   <Image
//                     source={require('./images/flash.png')}
//                     style={styles.playingDesign}
//                   />
//                 )}
//               </View>
//             </TouchableOpacity>
//           )}
//         />
       
//       </View>
//       <View style={styles.songBar}>
          
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
//   playingDesign: {
//     width: 18,
//     height: 18,
//     tintColor: 'white',
//   },
//   songBar:{
//     width: '100%',
//     height:70,
//     position: 'relative',
//     backgroundColor: "#004953"
//   }
// });











// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
// import { arijitList } from './assets/songs/ArijitSongs';
// import TrackPlayer, { Event, State, useTrackPlayerEvents, usePlaybackState } from 'react-native-track-player';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from './App';
// import { StackNavigationProp } from '@react-navigation/stack';
// import ControlCenter from './components/ControlCenter';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Pressable } from 'react-native';


// const screenHeight = Dimensions.get('window').height;

// export default function ArijitSingh() {
//   type NavigationProp = StackNavigationProp<RootStackParamList, 'ArijitSingh'>;
//   const navigation = useNavigation<NavigationProp>();
//   const [initialTrackPlayingId, setInitialTrackPlayingId] = useState<string | null>(null);
//   const [currentTrack, setCurrentTrack] = useState<any>(null); // Store current track data
//   const playBackState = usePlaybackState();

//   const togglePlayback = async (playback: State) => {
//       const currentTrack = await TrackPlayer.getCurrentTrack();
//       if (currentTrack !== null) {
//         if (playback === State.Paused || playback === State.Ready) {
//           await TrackPlayer.play();
//         } else {
//           await TrackPlayer.pause();
//         }
//       }
//     };

//   useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
//     if (event.nextTrack !== undefined) {
//       const track = await TrackPlayer.getTrack(event.nextTrack);
//       if (track?.id) {
//         setInitialTrackPlayingId(track.id);
//         setCurrentTrack(track); // Update the current track state
//       }
//     }
//   });

//   // Handle playback when a user selects a specific song
//   async function currentState(item: any): Promise<void> {
//     const state = await TrackPlayer.getState();

//     if (state === State.Playing || state === State.Paused || state === State.Ready) {
//       await TrackPlayer.stop();
//       await TrackPlayer.reset();
//     }

//     const trackIndex = arijitList.findIndex((track) => track.id === item.id);
//     if (trackIndex !== -1) {
//       const tracksToPlay = arijitList.slice(trackIndex);
//       setInitialTrackPlayingId(item.id);
//       setCurrentTrack(item); // Update current track when a song is selected
//       await TrackPlayer.add(tracksToPlay);
//       await TrackPlayer.play();
//       navigation.navigate('PlayerScreen', { track: item });
//     } else {
//       console.error('Track not found in the list.');
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
//           showsVerticalScrollIndicator={false}
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
//                 {(item.id === initialTrackPlayingId && playBackState.state === State.Playing) && (
//                   <Image
//                     source={require('./images/flash.png')}
//                     style={styles.playingDesign}
//                   />
//                 )}
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </View>

//       {/* SongBar displaying current track image */}
//       {currentTrack && (
//         <View style={styles.songBar}>
//           <TouchableOpacity onPress={ () => navigation.navigate('PlayerScreen',{track: currentTrack})}
//           >
//           <Image
//             source={{ uri: currentTrack.artwork }}
//             style={styles.songBarImage}
//           />
//           <Text style={styles.songBarText}>{currentTrack.title}</Text>
//           </TouchableOpacity>
          


//            <Pressable onPress={() => togglePlayback(playBackState.state || State.None)}>
//                   <Icon
//                     style={styles.icon}
//                     name={playBackState.state === State.Playing ? 'pause' : 'play-arrow'}
//                     size={40}
//                   />
//                 </Pressable>
//         </View>
//       )}
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
//   playingDesign: {
//     width: 18,
//     height: 18,
//     tintColor: 'white',
//   },
//   songBar: {
//     width: '100%',
//     height: 70,
//     position: 'static',
//     backgroundColor: '#002E2E',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//   },
//   songBarImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 10,
//   },
//   songBarText: {
//     color: 'white',
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   icon:{
//     color: 'white'
//   }
// });








import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { arijitList } from './assets/songs/ArijitSongs';
import TrackPlayer, { Event, State, useTrackPlayerEvents, usePlaybackState } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './App';
import { StackNavigationProp } from '@react-navigation/stack';


import MusicContext from './context/MusicContext';

const screenHeight = Dimensions.get('window').height;

export default function ArijitSingh() {
  type NavigationProp = StackNavigationProp<RootStackParamList, 'ArijitSingh'>;
  const navigation = useNavigation<NavigationProp>();
  // const [initialTrackPlayingId, setInitialTrackPlayingId] = useState<string | null>(null);
  // const [currentTrack, setCurrentTrack] = useState<any>(null); // Store current track data
  const playBackState = usePlaybackState();

  const {currentTrack, setCurrentTrack, initialTrackPlayingId, setInitialTrackPlayingId} = useContext(MusicContext)

  
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (event.nextTrack !== undefined) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      if (track?.id) {
        setInitialTrackPlayingId(track.id);
        setCurrentTrack(track); // Update the current track state
      }
    }
  });

  // Handle playback when a user selects a specific song
  async function currentState(item: any): Promise<void> {
    const state = await TrackPlayer.getState();

    if (state === State.Playing || state === State.Paused || state === State.Ready) {
      await TrackPlayer.stop();
      await TrackPlayer.reset();
    }

    const trackIndex = arijitList.findIndex((track) => track.id === item.id);
    if (trackIndex !== -1) {
      const tracksToPlay = arijitList.slice(trackIndex);
      setInitialTrackPlayingId(item.id);
      setCurrentTrack(item); // Update current track when a song is selected
      await TrackPlayer.add(tracksToPlay);
      await TrackPlayer.play();
      // navigation.navigate('PlayerScreen', { track: item });
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
                {(item.id === initialTrackPlayingId && playBackState.state === State.Playing) && (
                  <Image
                    source={require('./images/flash.png')}
                    style={styles.playingDesign}
                  />
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      
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
  playingDesign: {
    width: 18,
    height: 18,
    tintColor: 'white',
  },
  
});
 