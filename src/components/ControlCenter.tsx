// import { View, Text, StyleSheet, Pressable } from 'react-native'
// import React from 'react'
// import TrackPlayer , {State, usePlaybackState} from 'react-native-track-player'
// import Icon from 'react-native-vector-icons/MaterialIcons'
// import { playBackService } from '../../musicPlayerService'
// export default function ControlCenter() {
//   const playBackState = usePlaybackState()

//   //next button
//   const skipToNext = async () =>{
//     await TrackPlayer.skipToNext() 
//   }
//   //next Previous
//   const skipToPrevious = async () =>{
//     await TrackPlayer.skipToPrevious() 
//   }
  
//   const togglePlayBack = async (playback: State) => {
//     const currentTrack =await TrackPlayer.getCurrentTrack()

//     if(currentTrack !== null){
//       if (playback === State.Paused || State.Ready) {
//         await TrackPlayer.play()
//       }
//       else{
//         await TrackPlayer.pause()
//       }
//     }
//   }
   
//   return (
//     <View style={styles.container}>
//         <Pressable onPress={skipToPrevious}>
//             <Icon style={styles.icon} name="skip-previous" size={40} />
//         </Pressable>
//         <Pressable onPress={() => togglePlayback(playBackState)}>
//             <Icon
//                 style={styles.icon}
//                 name={playBackState === State.Playing ? "pause" : "play-arrow"}
//                 size={75}
//             />
//         </Pressable>
//         <Pressable onPress={skipToNext}>
//             <Icon style={styles.icon} name="skip-next" size={40} />
//         </Pressable>
//     </View>
// );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 56,

//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     color: '#FFFFFF',
//   },
//   playButton: {
//     marginHorizontal: 24,
//   },
// });













// import { View, StyleSheet, Pressable } from 'react-native';
// import React from 'react';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export default function ControlCenter() {
//     const playBackState = usePlaybackState();

//     // Skip to the next track
//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext();
//     };

//     // Skip to the previous track
//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious();
//     };

//     // Toggle playback state
//     const togglePlayBack = async (playback:State) => {
//         const currentTrack = await TrackPlayer.getCurrentTrack();

//         if (currentTrack !== null) {
//             if (playback === State.Paused || playback === State.Ready) {
//                 await TrackPlayer.play();
//             } else if (playback === State.Playing) {
//                 await TrackPlayer.pause();
//             }
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Pressable onPress={skipToPrevious}>
//                 <Icon style={styles.icon} name="skip-previous" size={40} />
//             </Pressable>
//             <Pressable onPress={() => togglePlayBack(playBackState)}>
//                 <Icon
//                     style={[styles.icon, styles.playButton]}
//                     name={playBackState === State.Playing ? "pause" : "play-arrow"}
//                     size={75}
//                 />
//             </Pressable>
//             <Pressable onPress={skipToNext}>
//                 <Icon style={styles.icon} name="skip-next" size={40} />
//             </Pressable>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: 56,
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icon: {
//         color: '#FFFFFF',
//     },
//     playButton: {
//         marginHorizontal: 24,
//     },
// });












// import React from 'react'
// import { View, StyleSheet, Pressable } from 'react-native'
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'


// import Icon from 'react-native-vector-icons/MaterialIcons'

// import { playBackService } from '../../musicPlayerService'
// const ControlCenter = () => {

//     const playBackState = usePlaybackState()
//     // next button
//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext()
//     }
//     // Previous button
//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious()
//     }

//     const togglePlayback = async (playback: State) => {
//         const  currentTrack = await TrackPlayer.getCurrentTrack()

//         if (currentTrack !== null) {
//             if (playback === State.Paused || playback === State.Ready) {
//                 await TrackPlayer.play()
//             } else {
//                 await TrackPlayer.pause()
//             }
//         }
//     }

//     const isPlaying =
//     playBackState?.state === State.Playing || playBackState === State.Playing;

// return (
//     <View style={styles.container}>
//         <Pressable onPress={skipToPrevious}>
//             <Icon style={styles.icon} name="skip-previous" size={40} />
//         </Pressable>
//         <Pressable onPress={togglePlayBack}>
//             <Icon
//                 style={[styles.icon, styles.playButton]}
//                 name={isPlaying ? "pause" : "play-arrow"}
//                 size={75}
//             />
//         </Pressable>
//         <Pressable onPress={skipToNext}>
//             <Icon style={styles.icon} name="skip-next" size={40} />
//         </Pressable>
//     </View>
// );
// }

// const styles = StyleSheet.create({
//     container: {
//       marginBottom: 56,
  
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     icon: {
//       color: '#FFFFFF',
//     },
//     playButton: {
//       marginHorizontal: 24,
//     },
//   });

// export default ControlCenter










// import { View, StyleSheet, Pressable } from 'react-native';
// import React, { useEffect } from 'react';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export default function ControlCenter() {
//     const playBackState = usePlaybackState();

//     useEffect(() => {
//         // Ensure TrackPlayer is initialized before using playback controls
//         const setupTrackPlayer = async () => {
//             await TrackPlayer.setupPlayer();
//         };

//         setupTrackPlayer();
//     }, []);

//     // Skip to the next track
//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext();
//     };

//     // Skip to the previous track
//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious();
//     };

//     // Toggle playback state
//     const togglePlayBack = async () => {
//         const currentTrack = await TrackPlayer.getCurrentTrack();

//         if (currentTrack !== null) {
//             // Safely extract the state property
//             const state = playBackState && "state" in playBackState ? playBackState.state : playBackState;

//             if (state === State.Paused || state === State.Ready) {
//                 await TrackPlayer.play();
//             } else  {
//                 await TrackPlayer.pause();
//             }
//         }
//     };

//     // Determine if playing
//     const isPlaying =
//         playBackState && "state" in playBackState
//             ? playBackState.state === State.Playing
//             : playBackState === State.Playing;

//     return (
//         <View style={styles.container}>
//             <Pressable onPress={skipToPrevious}>
//                 <Icon style={styles.icon} name="skip-previous" size={40} />
//             </Pressable>
//             <Pressable onPress={togglePlayBack}>
//                 <Icon
//                     style={[styles.icon, styles.playButton]}
//                     name={isPlaying ? "pause" : "play-arrow"}
//                     size={75}
//                 />
//             </Pressable>
//             <Pressable onPress={skipToNext}>
//                 <Icon style={styles.icon} name="skip-next" size={40} />
//             </Pressable>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: 56,
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icon: {
//         color: '#FFFFFF',
//     },
//     playButton: {
//         marginHorizontal: 24,
//     },
// });









// import React from 'react'
// import { View, StyleSheet, Pressable } from 'react-native'
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'


// import Icon from 'react-native-vector-icons/MaterialIcons'


// const ControlCenter = () => {

//     const playBackState = usePlaybackState()
//     // next button
//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext()
//     }
//     // Previous button
//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious()
//     }

//     const togglePlayback = async (playback: State) => {
//         const  currentTrack = await TrackPlayer.getCurrentTrack()

//         if (currentTrack !== null) {
//             if (playback === State.Paused || playback === State.Ready) {
//                 await TrackPlayer.play()
//             } else {
//                 await TrackPlayer.pause()
//             }
//         }
//     }

//   return (
//     <View style={styles.container}>
//         <Pressable onPress={skipToPrevious}>
//             <Icon style={styles.icon} name="skip-previous" size={40} />
//         </Pressable>
//         <Pressable onPress={() => togglePlayback(playBackState)}>
//             <Icon 
//             style={styles.icon} 
//             name={playBackState === State.Playing ? "pause" : "play-arrow"} 
//             size={75} />
//         </Pressable>
//         <Pressable onPress={skipToNext}>
//             <Icon style={styles.icon} name="skip-next" size={40} />
//         </Pressable>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//       marginBottom: 56,
  
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     icon: {
//       color: '#FFFFFF',
//     },
//     playButton: {
//       marginHorizontal: 24,
//     },
//   });

// export default ControlCenter
















// import React from 'react'
// import { View, StyleSheet, Pressable } from 'react-native'
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
// import Icon from 'react-native-vector-icons/MaterialIcons'

// const ControlCenter = () => {
//     const playBackState = usePlaybackState();

//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext();
//     };

//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious();
//     };

//     const togglePlayback = async (playback: State | undefined) => {
//         const currentTrack = await TrackPlayer.getCurrentTrack();

//         if (currentTrack !== null) {
//             if (playback === State.Paused || playback === State.Ready) {
//                 await TrackPlayer.play();
//             } else if (playback === State.Playing) {
//                 await TrackPlayer.pause();
//             }
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Pressable onPress={skipToPrevious}>
//                 <Icon style={styles.icon} name="skip-previous" size={40} />
//             </Pressable>
//                 <Pressable onPress={() => togglePlayback(playBackState)}>
//                     <Icon 
//                         style={styles.icon} 
//                         name={playBackState === State.Playing ? "pause" : "play-arrow"} 
//                     size={75} 
//                 />
//             </Pressable>
//             <Pressable onPress={skipToNext}>
//                 <Icon style={styles.icon} name="skip-next" size={40} />
//             </Pressable>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: 56,
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icon: {
//         color: '#FFFFFF',
//     },
//     playButton: {
//         marginHorizontal: 24,
//     },
// });

// export default ControlCenter;













// import React from 'react';
// import { View, StyleSheet, Pressable } from 'react-native';
// import TrackPlayer, { usePlaybackState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';




// const ControlCenter = () => {
//     const playBackState = usePlaybackState();

//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext();
//     };

//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious();
//     };

//     const togglePlayback = async (playback: any) => {
//         const currentTrack = await TrackPlayer.getCurrentTrack();
//         if (currentTrack !== null) {
//             if (playback === 2 || playback === 6) { // State.Paused or State.Ready
//                 await TrackPlayer.play();
//             } else if (playback === 3) { // State.Playing
//                 await TrackPlayer.pause();
//             }
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Pressable onPress={skipToPrevious}>
//                 <Icon style={styles.icon} name="skip-previous" size={40} />
//             </Pressable>
//             <Pressable onPress={() => togglePlayback(playBackState)}>
//                 <Icon 
//                     style={styles.icon} 
//                     name={playBackState === State.Playing ? "pause" : "play-arrow"}
//                     // 3 = Playing
//                     size={75} 
//                 />
//             </Pressable>
//             <Pressable onPress={skipToNext}>
//                 <Icon style={styles.icon} name="skip-next" size={40} />
//             </Pressable>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: 56,
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icon: {
//         color: '#FFFFFF',
//     },
//     playButton: {
//         marginHorizontal: 24,
//     },
// });

// export default ControlCenter;











// import React from 'react';
// import { View, StyleSheet, Pressable } from 'react-native';
// import TrackPlayer, { usePlaybackState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// // Manually define playback states if `State` is unavailable
// const State = {
//     None: 0,
//     Ready: 6,
//     Playing: 3,
//     Paused: 2,
//     Stopped: 1,
//     Buffering: 8,
// };

// const ControlCenter = () => {
//     const playBackState = usePlaybackState();

//     // Debug: Log playback state
//     console.log("Playback state:", playBackState);

//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext();
//     };

//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious();
//     };

//     const togglePlayback = async (playback:any) => {
//         const currentTrack = await TrackPlayer.getCurrentTrack();
//         if (currentTrack !== null) {
//             if (playback === State.Paused || playback === State.Ready) {
//                 await TrackPlayer.play();
//             } else if (playback === State.Playing) {
//                 await TrackPlayer.pause();
//             }
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Pressable onPress={skipToPrevious}>
//                 <Icon style={styles.icon} name="skip-previous" size={40} />
//             </Pressable>
//             <Pressable onPress={() => togglePlayback(playBackState)}>
//                 <Icon
//                     style={styles.icon}
//                     name={
//                         playBackState === State.Playing
//                             ? "pause"
//                             : "play-arrow"
//                     }
//                     size={75}
//                 />
//             </Pressable>
//             <Pressable onPress={skipToNext}>
//                 <Icon style={styles.icon} name="skip-next" size={40} />
//             </Pressable>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: 56,
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icon: {
//         color: '#FFFFFF',
//     },
//     playButton: {
//         marginHorizontal: 24,
//     },
// });

// export default ControlCenter;



























// import React from 'react';
// import { View, StyleSheet, Pressable } from 'react-native';
// import TrackPlayer, {
//     usePlaybackState,
//     State as TrackPlayerState,
// } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const ControlCenter = () => {
//     const playBackState = usePlaybackState(); // Get playback state

//     const skipToNext = async () => {
//         try {
//             await TrackPlayer.skipToNext();
//         } catch (error) {
//             console.warn('Cannot skip to next track:', error);
//         }
//     };

//     const skipToPrevious = async () => {
//         try {
//             await TrackPlayer.skipToPrevious();
//         } catch (error) {
//             console.warn('Cannot skip to previous track:', error);
//         }
//     };

//     const togglePlayback = async () => {
//         try {
//             const currentTrack = await TrackPlayer.getCurrentTrack();

//             if (currentTrack !== null) {
//                 if (
//                     playBackState === TrackPlayerState.Paused ||
//                     playBackState === TrackPlayerState.Ready
//                 ) {
//                     await TrackPlayer.play();
//                 } else if (playBackState === TrackPlayerState.Playing) {
//                     await TrackPlayer.pause();
//                 }
//             } else {
//                 console.warn('No track is currently loaded.');
//             }
//         } catch (error) {
//             console.warn('Failed to toggle playback:', error);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             {/* Skip to Previous */}
//             <Pressable onPress={skipToPrevious}>
//                 <Icon style={styles.icon} name="skip-previous" size={40} />
//             </Pressable>

//             {/* Play/Pause Button */}
//             <Pressable onPress={togglePlayback}>
//                 <Icon
//                     style={styles.icon}
//                     name={
//                         playBackState === TrackPlayerState.Playing
//                             ? 'pause'
//                             : 'play-arrow'
//                     }
//                     size={75}
//                 />
//             </Pressable>

//             {/* Skip to Next */}
//             <Pressable onPress={skipToNext}>
//                 <Icon style={styles.icon} name="skip-next" size={40} />
//             </Pressable>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: 56,
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#000000', // Background color for visibility
//     },
//     icon: {
//         color: '#FFFFFF',
//         marginHorizontal: 20,
//     },
// });

// export default ControlCenter;






// import React, { useEffect } from 'react';
// import { View, StyleSheet, Pressable } from 'react-native';
// import TrackPlayer, { usePlaybackState, State as TrackPlayerState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// // Function to ensure TrackPlayer is set up and ready
// const initializeTrackPlayer = async () => {
//   try {
//     await TrackPlayer.setupPlayer();
//   } catch (error) {
//     console.warn("TrackPlayer setup failed", error);
//   }
// };

// const ControlCenter = () => {
//     const playBackState = usePlaybackState();

//     // Initialize TrackPlayer on mount
//     useEffect(() => {
//       initializeTrackPlayer();
//     }, []);

//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext();
//     };

//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious();
//     };

//     const togglePlayback = async () => {
//         const currentTrack = await TrackPlayer.getCurrentTrack();

//         // Check for valid playback state and current track
//         if (typeof playBackState === 'number' && currentTrack !== null) {
//             if (
//                 playBackState === TrackPlayerState.Paused ||
//                 playBackState === TrackPlayerState.Ready
//             ) {
//                 await TrackPlayer.play();
//             } else if (playBackState === TrackPlayerState.Playing) {
//                 await TrackPlayer.pause();
//             }
//         } else {
//             console.warn('Playback state is invalid or uninitialized.');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Pressable onPress={skipToPrevious}>
//                 <Icon style={styles.icon} name="skip-previous" size={40} />
//             </Pressable>
//             <Pressable onPress={togglePlayback}>               <Icon
//                     style={styles.icon}
//                     name={
//                         typeof playBackState === 'number' &&
//                         playBackState === TrackPlayerState.Playing
//                             ? "pause"
//                             : "play-arrow"
//                     }
//                     size={75}
//                 />
//             </Pressable>
//             <Pressable onPress={skipToNext}>
//                 <Icon style={styles.icon} name="skip-next" size={40} />
//             </Pressable>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: 56,
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icon: {
//         color: '#FFFFFF',
//     },
//     playButton: {
//         marginHorizontal: 24,
//     },
// });

// export default ControlCenter;
















//  SELECTED
// import React from 'react';
// import { View, StyleSheet, Pressable } from 'react-native';
// import TrackPlayer, { usePlaybackState, State as TrackPlayerState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const ControlCenter = () => {
//     const playBackState = usePlaybackState();

//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext();
//     };

//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious();
//     };

//     const togglePlayback = async () => {
//         const currentTrack = await TrackPlayer.getCurrentTrack();

//         // Safely check for valid playback state
//         if (typeof playBackState === 'number' && currentTrack !== null) {
//             if (
//                 playBackState === TrackPlayerState.Paused ||
//                 playBackState === TrackPlayerState.Ready
//             ) {
//                 await TrackPlayer.play();
//             } else if (playBackState === TrackPlayerState.Playing) {
//                 await TrackPlayer.pause();
//             }
//         } else {
//             console.warn('Playback state is invalid or uninitialized.');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Pressable onPress={skipToPrevious}>
//                 <Icon style={styles.icon} name="skip-previous" size={40} />
//             </Pressable>
//             <Pressable onPress={togglePlayback}>
//                 <Icon
//                     style={styles.icon}
//                     name={
//                         typeof playBackState === 'number' &&
//                         playBackState === TrackPlayerState.Playing
//                             ? "pause"
//                             : "play-arrow"
//                     }
//                     size={75}
//                 />
//             </Pressable>
//             <Pressable onPress={skipToNext}>
//                 <Icon style={styles.icon} name="skip-next" size={40} />
//             </Pressable>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginBottom: 56,
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icon: {
//         color: '#FFFFFF',
//     },
//     playButton: {
//         marginHorizontal: 24,
//     },
// });

// export default ControlCenter;











//ControlCenter component is responsible for displaying the music control buttons (play/pause, skip to next, skip to previous) and controlling the playback of the music using the TrackPlayer

// import React, { useEffect, useState } from 'react'
// import { View, StyleSheet, Pressable } from 'react-native'
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'


// import Icon from 'react-native-vector-icons/MaterialIcons'

// import { playBackService } from "../../musicPlayerService"
// import { Text } from 'react-native'
// import Slider from '@react-native-community/slider'



// const ControlCenter = () => {
//   const [volume, setVolume] = useState(1);
//     const playBackState = usePlaybackState()//usePlaybackState() => hook to get current state of audio or media player
//     // next button
//     // console.log(playBackState);//tells state is whether playing or paused ex: {"state": "playing"}

//     // console.log(TrackPlayer);// it has many predefined funct like skipToNext,getVolume
    
//     const  changeVolume = async (value: number) => {
//       setVolume(value)
//       await TrackPlayer.setVolume(value)
//     }
//     useEffect(() => {
//       const fetchVolume = async () => {
//           const currentVolume = await TrackPlayer.getVolume();
//           setVolume(currentVolume);
//       };
//       fetchVolume();
//   }, []);
    

    
//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext()
//     }
//     // Previous button
//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious()
//     }

//     const togglePlayback = async (playback: State) => {
//         const  currentTrack = await TrackPlayer.getCurrentTrack()
//         // console.log(playback);
//         // console.log(currentTrack);
        
//         if (currentTrack !== null) { //if in place of "null" if there would be any number(i.e id) which is related to song then that song would not be playing
//             if (playback === State.Paused || playback === State.Ready) {
//                 await TrackPlayer.play()
//             } else {
//                 await TrackPlayer.pause()
//             }
//         }
//     }

//   return (
//     <View style={styles.container}>
//         <Pressable onPress={skipToPrevious}>
//             <Icon style={styles.icon} name="skip-previous" size={40} />
//         </Pressable>
//         <Pressable onPress={() => togglePlayback(playBackState.state || State.None)}>
//             <Icon 
//             style={styles.icon} 
//             name={playBackState.state === State.Playing ? "pause" : "play-arrow"} 
//             size={75} />
//         </Pressable>
//         <Pressable onPress={skipToNext}>
//             <Icon style={styles.icon} name="skip-next" size={40} />
//         </Pressable>
//         <Text>Volume: {(volume * 100).toFixed(0)}%</Text>
//             <Slider
//                 minimumValue={0} // Min volume
//                 maximumValue={1} // Max volume
//                 step={0.01} // Step for finer control
//                 value={volume} // Current volume
//                 onValueChange={changeVolume} // Update on slider movement
//                 minimumTrackTintColor="#1FB28A"
//                 maximumTrackTintColor="#d3d3d3"
//                 thumbTintColor="#1FB28A"
//             />


//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//       marginBottom: 56,
  
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     icon: {
//       color: '#FFFFFF',
//     },
//     playButton: {
//       marginHorizontal: 24,
//     },
//   });

// export default ControlCenter




// import React from 'react'
// import { View, StyleSheet, Pressable } from 'react-native'
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'


// import Icon from 'react-native-vector-icons/MaterialIcons'

// import { playBackService } from "../../musicPlayerService"

// const ControlCenter = () => {

//     const playBackState = usePlaybackState()
//     // next button
//     const skipToNext = async () => {
//         await TrackPlayer.skipToNext()
//     }
//     // Previous button
//     const skipToPrevious = async () => {
//         await TrackPlayer.skipToPrevious()
//     }

//     const togglePlayback = async (playback: State) => {
//         const  currentTrack = await TrackPlayer.getCurrentTrack()

//         if (currentTrack !== null) {
//             if (playback === State.Paused || playback === State.Ready) {
//                 await TrackPlayer.play()
//             } else {
//                 await TrackPlayer.pause()
//             }
//         }
//     }

//   return (
//     <View style={styles.container}>
//         <Pressable onPress={skipToPrevious}>
//             <Icon style={styles.icon} name="skip-previous" size={40} />
//         </Pressable>
//         <Pressable onPress={() => togglePlayback(playBackState.state || State.None)}>
//             <Icon 
//             style={styles.icon} 
//             name={playBackState.state === State.Playing ? "pause" : "play-arrow"} 
//             size={75} />
//         </Pressable>
//         <Pressable onPress={skipToNext}>
//             <Icon style={styles.icon} name="skip-next" size={40} />
//         </Pressable>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//       marginBottom: 56,
  
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     icon: {
//       color: '#FFFFFF',
//     },
//     playButton: {
//       marginHorizontal: 24,
//     },
//   });

// export default ControlCenter









// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Pressable, Text } from 'react-native';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Slider from '@react-native-community/slider';

// const ControlCenter = () => {
//   const [volume, setVolume] = useState(1); // State to store volume
//   const [showSlider, setShowSlider] = useState(false); // State to toggle slider visibility
//   const playBackState = usePlaybackState(); // Hook to get current playback state

//   // Change volume function
//   const changeVolume = async (value: number) => {
//     setVolume(value); // Update local volume state
//     await TrackPlayer.setVolume(value); // Set volume on TrackPlayer
//   };

//   // Fetch initial volume on component load
//   useEffect(() => {
//     const fetchVolume = async () => {
//       const currentVolume = await TrackPlayer.getVolume(); // Get current volume from TrackPlayer
//       setVolume(currentVolume); // Update state
//     };
//     fetchVolume();
//   }, []);

//   // Skip to next track
//   const skipToNext = async () => {
//     await TrackPlayer.skipToNext();
//   };

//   // Skip to previous track
//   const skipToPrevious = async () => {
//     await TrackPlayer.skipToPrevious();
//   };

//   // Toggle play/pause
//   const togglePlayback = async (playback: State) => {
//     const currentTrack = await TrackPlayer.getCurrentTrack();
//     if (currentTrack !== null) {
//       if (playback === State.Paused || playback === State.Ready) {
//         await TrackPlayer.play();
//       } else {
//         await TrackPlayer.pause();
//       }
//     }
//   };

//   // Toggle the visibility of the volume slider
//   const toggleSlider = () => {
//     setShowSlider(!showSlider);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Skip to previous track button */}
//       <Pressable onPress={skipToPrevious}>
//         <Icon style={styles.icon} name="skip-previous" size={40} />
//       </Pressable>

//       {/* Play/Pause button */}
//       <Pressable onPress={() => togglePlayback(playBackState.state || State.None)}>
//         <Icon
//           style={styles.icon}
//           name={playBackState.state === State.Playing ? 'pause' : 'play-arrow'}
//           size={75}
//         />
//       </Pressable>

//       {/* Skip to next track button */}
//       <Pressable onPress={skipToNext}>
//         <Icon style={styles.icon} name="skip-next" size={40} />
//       </Pressable>

//       {/* Volume icon */}
//       <Pressable onPress={toggleSlider}>
//         <Icon style={styles.icon} name="volume-up" size={40} />
//       </Pressable>

//       {/* Volume Slider (only visible when toggleSlider is true) */}
//       {showSlider && (
//         <View style={styles.sliderContainer}>
//           <Text style={styles.label}>Volume: {(volume * 100).toFixed(0)}%</Text>
//           <Slider
//             style={styles.slider}
//             minimumValue={0} // Min volume
//             maximumValue={1} // Max volume
//             step={0.01} // Step for finer control
//             value={volume} // Current volume
//             onValueChange={changeVolume} // Update on slider movement
//             minimumTrackTintColor="#1FB28A"
//             maximumTrackTintColor="#d3d3d3"
//             thumbTintColor="#1FB28A"
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 56,
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     color: '#FFFFFF',
//   },
//   sliderContainer: {
//     position: 'absolute', // Overlay the slider
//     top: '20%', // Adjust based on your UI
//     alignItems: 'center',
//     backgroundColor: 'transparent', // Keep it transparent
//   },
//   label: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   slider: {
//     width: 200, // Width for a vertical slider
//     height: 300, // Height for vertical slider
//     transform: [{ rotate: '-90deg' }], // Rotate to make it vertical
//   },
// });

// export default ControlCenter;












// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Pressable, Text } from 'react-native';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Slider from '@react-native-community/slider';

// const ControlCenter = () => {
//   const [volume, setVolume] = useState(1); // State to store volume
//   const [showSlider, setShowSlider] = useState(false); // State to toggle slider visibility
//   const playBackState = usePlaybackState(); // Hook to get current playback state

//   // Change volume function
//   const changeVolume = async (value: number) => {
//     setVolume(value); // Update local volume state
//     await TrackPlayer.setVolume(value); // Set volume on TrackPlayer
//   };

//   // Fetch initial volume on component load
//   useEffect(() => {
//     const fetchVolume = async () => {
//       const currentVolume = await TrackPlayer.getVolume(); // Get current volume from TrackPlayer
//       setVolume(currentVolume); // Update state
//     };
//     fetchVolume();
//   }, []);

//   // Skip to next track
//   const skipToNext = async () => {
//     await TrackPlayer.skipToNext();
//   };

//   // Skip to previous track
//   const skipToPrevious = async () => {
//     await TrackPlayer.skipToPrevious();
//   };

//   // Toggle play/pause
//   const togglePlayback = async (playback: State) => {
//     const currentTrack = await TrackPlayer.getCurrentTrack();
//     if (currentTrack !== null) {
//       if (playback === State.Paused || playback === State.Ready) {
//         await TrackPlayer.play();
//       } else {
//         await TrackPlayer.pause();
//       }
//     }
//   };

//   // Toggle the visibility of the volume slider
//   const toggleSlider = () => {
//     setShowSlider(!showSlider);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Skip to previous track button */}
//       <Pressable onPress={skipToPrevious}>
//         <Icon style={styles.icon} name="skip-previous" size={40} />
//       </Pressable>

//       {/* Play/Pause button */}
//       <Pressable onPress={() => togglePlayback(playBackState.state || State.None)}>
//         <Icon
//           style={styles.icon}
//           name={playBackState.state === State.Playing ? 'pause' : 'play-arrow'}
//           size={50}
//         />
//       </Pressable>

//       {/* Skip to next track button */}
//       <Pressable onPress={skipToNext}>
//         <Icon style={styles.icon} name="skip-next" size={40} />
//       </Pressable>

//       {/* Volume icon and slider container */}
//       <View style={styles.volumeContainer}>
//         {/* Volume icon */}
//         <Pressable onPress={toggleSlider}>
//           <Icon style={styles.icon} name="volume-up" size={30} />
//           <Text style={styles.label}> {(volume * 100).toFixed(0)}%</Text>
//         </Pressable>

//         {/* Volume Slider (only visible when toggleSlider is true) */}
//         {showSlider && (
//           <View style={styles.sliderContainer}>
            
//             <Slider
//               style={styles.slider}
//               minimumValue={0} // Min volume
//               maximumValue={1} // Max volume
//               step={0.01} // Step for finer control
//               value={volume} // Current volume
//               onValueChange={changeVolume} // Update on slider movement
//               minimumTrackTintColor="#1FB28A"
//               maximumTrackTintColor="#d3d3d3"
//               thumbTintColor="#1FB28A"
//             />
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 56,
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     color: '#FFFFFF',
//   },
//   volumeContainer: {
//     flexDirection: 'row', // Align icon and slider horizontally
//     alignItems: 'center', // Center them vertically
//   },
//   sliderContainer: {
//     marginLeft: 10, // Space between the icon and slider
//   },
//   label: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   slider: {
//     width: 150, // Adjust width of the vertical slider
//     height: 250, // Adjust height of the vertical slider
//     transform: [{ rotate: '-360deg' }], // Rotate to make it vertical
//   },
// });

// export default ControlCenter;









// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Pressable, Text } from 'react-native';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Slider from '@react-native-community/slider';

// const ControlCenter = () => {
//   const [volume, setVolume] = useState(1); // State to store volume
//   const [showSlider, setShowSlider] = useState(false); // State to toggle slider visibility
//   const [showPercentage, setShowPercentage] = useState(false); // State to show percentage while sliding
//   const playBackState = usePlaybackState(); // Hook to get current playback state

//   // Change volume function
//   const changeVolume = async (value: number) => {
//     setVolume(value); // Update local volume state
//     await TrackPlayer.setVolume(value); // Set volume on TrackPlayer
//     setShowPercentage(true); // Show percentage while sliding
//   };

//   // Fetch initial volume on component load
//   useEffect(() => {
//     const fetchVolume = async () => {
//       const currentVolume = await TrackPlayer.getVolume(); // Get current volume from TrackPlayer
//       setVolume(currentVolume); // Update state
//     };
//     fetchVolume();
//   }, []);

//   // Skip to next track
//   const skipToNext = async () => {
//     await TrackPlayer.skipToNext();
//   };

//   // Skip to previous track
//   const skipToPrevious = async () => {
//     await TrackPlayer.skipToPrevious();
//   };

//   // Toggle play/pause
//   const togglePlayback = async (playback: State) => {
//     const currentTrack = await TrackPlayer.getCurrentTrack();
//     if (currentTrack !== null) {
//       if (playback === State.Paused || playback === State.Ready) {
//         await TrackPlayer.play();
//       } else {
//         await TrackPlayer.pause();
//       }
//     }
//   };

//   // Toggle the visibility of the volume slider
//   const toggleSlider = () => {
//     setShowSlider(!showSlider);
//     setShowPercentage(false); // Reset percentage when slider is hidden
//   };

//   // Stop showing percentage once sliding stops
//   const handleSlidingComplete = () => {
//     setShowPercentage(false); // Hide percentage after sliding is complete
//   };

//   return (
//     <View style={styles.container}>
//       {/* Skip to previous track button */}
//       <Pressable onPress={skipToPrevious}>
//         <Icon style={styles.icon} name="skip-previous" size={40} />
//       </Pressable>

//       {/* Play/Pause button */}
//       <Pressable onPress={() => togglePlayback(playBackState.state || State.None)}>
//         <Icon
//           style={styles.icon}
//           name={playBackState.state === State.Playing ? 'pause' : 'play-arrow'}
//           size={50}
//         />
//       </Pressable>

//       {/* Skip to next track button */}
//       <Pressable onPress={skipToNext}>
//         <Icon style={styles.icon} name="skip-next" size={40} />
//       </Pressable>

//       {/* Volume icon and slider container */}
//       <View style={styles.volumeContainer}>
//         {/* Volume icon */}
//         <Pressable onPress={toggleSlider}>
//           <Icon style={styles.icon} name="volume-up" size={30} />
//         </Pressable>

//         {/* Volume Percentage (only visible when sliding) */}
//         {showPercentage && (
//           <Text style={styles.label}> {(volume * 100).toFixed(0)}%</Text>
//         )}

//         {/* Volume Slider (only visible when toggleSlider is true) */}
//         {showSlider && (
//           <View style={styles.sliderContainer}>
//             <Slider
//               style={styles.slider}
//               minimumValue={0} // Min volume
//               maximumValue={1} // Max volume
//               step={0.01} // Step for finer control
//               value={volume} // Current volume
//               onValueChange={changeVolume} // Update on slider movement
//               onSlidingComplete={handleSlidingComplete} // Stop showing percentage after sliding completes
//               minimumTrackTintColor="#1FB28A"
//               maximumTrackTintColor="#d3d3d3"
//               thumbTintColor="#1FB28A"
//             />
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 56,
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     color: '#FFFFFF',
//   },
//   volumeContainer: {
//     flexDirection: 'row', // Align icon and slider horizontally
//     alignItems: 'center', // Center them vertically
//   },
//   sliderContainer: {
//     marginLeft: 10, // Space between the icon and slider
//   },
//   label: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   slider: {
//     width: 150, // Adjust width of the vertical slider
//     height: 250, // Adjust height of the vertical slider
//     transform: [{ rotate: '-360deg' }], // Rotate to make it vertical
//   },
// });

// export default ControlCenter;











import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';

const ControlCenter = () => {
  const [volume, setVolume] = useState(1); // State to store volume
  const [showSlider, setShowSlider] = useState(false); // State to toggle slider visibility
  const [showPercentage, setShowPercentage] = useState(false); // State to show percentage while sliding
  const playBackState = usePlaybackState(); // Hook to get current playback state

  // Change volume function
  const changeVolume = async (value: number) => {
    setVolume(value); // Update local volume state
    await TrackPlayer.setVolume(value); // Set volume on TrackPlayer
  };

  // Fetch initial volume on component load
  useEffect(() => {
    const fetchVolume = async () => {
      const currentVolume = await TrackPlayer.getVolume(); // Get current volume from TrackPlayer
      setVolume(currentVolume); // Update state
    };
    fetchVolume();
  }, []);

  // Skip to next track
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  // Skip to previous track
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  // Toggle play/pause
  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  // Toggle the visibility of the volume slider
  const toggleSlider = () => {
    setShowSlider(!showSlider);
    setShowPercentage(false); // Reset percentage when slider is hidden
  };

  // Handle when sliding starts
  const handleSlidingStart = () => {
    setShowPercentage(true); // Show percentage when sliding start
  };

  // Stop showing percentage once sliding completes
  const handleSlidingComplete = () => {
    setShowPercentage(false); // Hide percentage after sliding completes
  };

  return (
    <View style={styles.container}>
      {/* Skip to previous track button */}
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>

      {/* Play/Pause button */}
      <Pressable onPress={() => togglePlayback(playBackState.state || State.None)}>
        <Icon
          style={styles.icon}
          name={playBackState.state === State.Playing ? 'pause' : 'play-arrow'}
          size={50}
        />
      </Pressable>

      {/* Skip to next track button */}
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>

      {/* Volume icon and slider container */}
      <View style={styles.volumeContainer}>
        {/* Volume icon */}
        <Pressable onPress={toggleSlider}>
          <Icon style={styles.icon} name="volume-up" size={30} />
        </Pressable>

        {/* Volume Percentage (only visible when sliding) */}
        {showPercentage && (
          <Text style={styles.label}> {(volume * 100).toFixed(0)}%</Text>
        )}

        {/* Volume Slider (only visible when toggleSlider is true) */}
        {showSlider && (
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              minimumValue={0} // Min volume
              maximumValue={1} // Max volume
              step={0.01} // Step for finer control
              value={volume} // Current volume
              onValueChange={changeVolume} // Update on slider movement
              onSlidingStart={handleSlidingStart} // Show percentage when sliding starts
              onSlidingComplete={handleSlidingComplete} // Hide percentage after sliding completes
              minimumTrackTintColor="#1FB28A"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#1FB28A"
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  volumeContainer: {
    flexDirection: 'row', // Align icon and slider horizontally
    alignItems: 'center', // Center them vertically
  },
  sliderContainer: {
    marginLeft: 10, // Space between the icon and slider
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  slider: {
    width: 150, // Adjust width of the vertical slider
    height: 250, // Adjust height of the vertical slider
    transform: [{ rotate: '-360deg' }], // Rotate to make it vertical
  },
});

export default ControlCenter;







//State => it will give ready,playing ,pause