// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Slider from '@react-native-community/slider'
// import { useProgress } from 'react-native-track-player'
// const SongSlider = () => {
//   const {position, duration} = useProgress()
//   return (
//     <View>
//       <Slider
//       value={position}
//       minimumValue={0}
//       maximumValue={duration}
//       thumbTintColor='white'
//       maximumTrackTintColor='white'
//       style={styles.sliderContainer}
//       />
//       <View style={styles.timeContainer}>
//         <Text style={styles.time}>
//           {new Date(position*1000).toISOString().substring(15,19)}
//         </Text>
//         <Text style={styles.time}>
//           {new Date((duration-position)*1000).toISOString().substring(15,19)}
//         </Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   sliderContainer: {
//     width: 350,
//     height: 40,
//     marginTop: 25,

//     flexDirection: 'row',
//   },
//   timeContainer: {
//     width: 340,

//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   time: {
//     color: '#fff',
//   },
// })


// export default SongSlider








// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { RouteProp } from '@react-navigation/native';
// import { RootStackParamList } from '../App';

// type PlayerScreenRouteProp = RouteProp<RootStackParamList, 'PlayerScreen'>;

// export default function PlayerScreen({ route }: { route: PlayerScreenRouteProp }) {
//   const { track } = route.params;
//   const playbackState = usePlaybackState();

//   async function togglePlayPause() {
//     const state = await TrackPlayer.getState();
//     if (state === State.Playing) {
//       await TrackPlayer.pause();
//     } else {
//       await TrackPlayer.play();
//     }
//   }

//   async function skipToNext() {
//     await TrackPlayer.skipToNext();
//   }

//   async function skipToPrevious() {
//     await TrackPlayer.skipToPrevious();
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: track.artwork }} style={styles.artwork} />
//       <Text style={styles.title}>{track.title}</Text>
//       <Text style={styles.artist}>{track.artist}</Text>

//       <View style={styles.controls}>
//         <TouchableOpacity onPress={skipToPrevious}>
//           <Icon name="skip-previous" size={40} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={togglePlayPause}>
//           <Icon
//             name={playbackState === State.Playing ? 'pause' : 'play-arrow'}
//             size={40}
//             color="white"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={skipToNext}>
//           <Icon name="skip-next" size={40} color="white" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#004953',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   artwork: {
//     width: 300,
//     height: 300,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 20,
//   },
//   artist: {
//     fontSize: 16,
//     color: '#FFFDD0',
//     marginTop: 5,
//   },
//   controls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
// });









// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { RouteProp } from '@react-navigation/native';
// import { RootStackParamList } from '../App';

// type PlayerScreenRouteProp = RouteProp<RootStackParamList, 'PlayerScreen'>;

// export default function PlayerScreen({ route }: { route: PlayerScreenRouteProp }) {
//   const { track } = route.params;
//   const playbackState = usePlaybackState();

//   async function togglePlayPause() {
//     try {
//       const state = await TrackPlayer.getState();
//       if (state === State.Playing) {
//         await TrackPlayer.pause();
//       } else {
//         await TrackPlayer.play();
//       }
//     } catch (error) {
//       console.error('Error toggling play/pause:', error);
//       Alert.alert('Error', 'Unable to toggle playback.');
//     }
//   }

//   async function skipToNext() {
//     try {
//       await TrackPlayer.skipToNext();
//     } catch (error) {
//       console.error('Error skipping to next track:', error);
//       Alert.alert('Error', 'No next track available.');
//     }
//   }

//   async function skipToPrevious() {
//     try {
//       await TrackPlayer.skipToPrevious();
//     } catch (error) {
//       console.error('Error skipping to previous track:', error);
//       Alert.alert('Error', 'No previous track available.');
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: track.artwork }}
//         style={styles.artwork}
//         defaultSource={require('../assets/placeholder.png')} // Add a fallback image
//       />
//       <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
//         {track.title || 'Unknown Title'}
//       </Text>
//       <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail">
//         {track.artist || 'Unknown Artist'}
//       </Text>

//       <View style={styles.controls}>
//         <TouchableOpacity onPress={skipToPrevious}>
//           <Icon name="skip-previous" size={40} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={togglePlayPause}>
//           <Icon
//             name={undefined === State.Playing ? 'pause' : 'play-arrow'}
//             size={50}
//             color="white"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={skipToNext}>
//           <Icon name="skip-next" size={40} color="white" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#004953',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   artwork: {
//     width: 300,
//     height: 300,
//     borderRadius: 15,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
//   artist: {
//     fontSize: 18,
//     color: '#FFFDD0',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   controls: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '80%',
//     marginTop: 20,
//   },
// });



// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
// import TrackPlayer, { State, usePlaybackState, useProgress } from 'react-native-track-player';
// import Slider from '@react-native-community/slider';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const PlayerScreen = ({ route }: any) => {
//   const { track } = route.params; // Get the current track passed as a parameter
//   const playbackState = usePlaybackState(); // Get the playback state
//   const progress = useProgress(); // Hook to track the progress of the current track

//   // Function to toggle play/pause
//   const togglePlayback = async () => {
//     const state = playbackState.state || State.None;
//     const currentTrack = await TrackPlayer.getCurrentTrack();
//     if (currentTrack !== null) {
//       if (state === State.Playing) {
//         await TrackPlayer.pause();
//       } else {
//         await TrackPlayer.play();
//       }
//     }
//   };

//   // Function to skip to the next track
//   const skipToNext = async () => {
//     try {
//       await TrackPlayer.skipToNext();
//     } catch (error) {
//       console.error('No next track available', error);
//     }
//   };

//   // Function to skip to the previous track
//   const skipToPrevious = async () => {
//     try {
//       await TrackPlayer.skipToPrevious();
//     } catch (error) {
//       console.error('No previous track available', error);
//     }
//   };

//   // Format time in mm:ss
//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   // Handle slider value change
//   const onSeek = async (value: number) => {
//     await TrackPlayer.seekTo(value);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Track Information */}
//       <Image source={{ uri: track.artwork }} style={styles.artwork} />
//       <Text style={styles.title}>{track.title || 'Unknown Title'}</Text>
//       <Text style={styles.artist}>{track.artist || 'Unknown Artist'}</Text>


//       <View style={styles.progressContainer}>
//         <Text style={styles.time}>{formatTime(progress.position)}</Text>
//         <Slider
//           style={styles.slider}
//           minimumValue={0}
//           maximumValue={progress.duration}
//           value={progress.position}
//           onSlidingComplete={onSeek}
//           minimumTrackTintColor="#1FB28A"
//           maximumTrackTintColor="#d3d3d3"
//           thumbTintColor="#1FB28A"
//         />
//         <Text style={styles.time}>{formatTime(progress.duration)}</Text>
//       </View>
//       {/* Playback Controls */}
//       <View style={styles.controls}>
//         <Pressable onPress={skipToPrevious}>
//           <Icon name="skip-previous" size={40} style={styles.icon} />
//         </Pressable>
//         <Pressable onPress={togglePlayback}>
//           <Icon
//             name={playbackState.state === State.Playing ? 'pause' : 'play-arrow'}
//             size={50}
//             style={styles.icon}
//           />
//         </Pressable>
//         <Pressable onPress={skipToNext}>
//           <Icon name="skip-next" size={40} style={styles.icon} />
//         </Pressable>
//       </View>

//       {/* Song Progress Slider */}
     
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#004953',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   artwork: {
//     width: 300,
//     height: 300,
//     borderRadius: 15,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   artist: {
//     fontSize: 18,
//     color: '#B0E0E6',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   controls: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//     width: '60%',
//   },
//   icon: {
//     color: '#FFFFFF',
//   },
//   progressContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '90%',
//     marginTop: 20,
//   },
//   slider: {
//     flex: 1,
//     marginHorizontal: 10,
//   },
//   time: {
//     color: '#FFFFFF',
//     fontSize: 14,
//   },
// });

// export default PlayerScreen;







// MAIN CODE




// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet, Text, Pressable, Image, Animated } from 'react-native';
// import TrackPlayer, { State, usePlaybackState, useProgress,Event } from 'react-native-track-player';
// import Slider from '@react-native-community/slider';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useAnimatedHeaderHeight } from '@react-navigation/native-stack';

// const PlayerScreen = () => {
//   const [currentTrack, setCurrentTrack] = useState<any>(null); // State to hold the current track info
//   const playbackState = usePlaybackState(); // Get the playback state
//   const progress = useProgress(500); 
//   const [isExpanded, setIsExpanded] = useState(false);

//   // console.log(playbackState);
  
//   //useProgress()=> hook that helps to keep the track of current playing audio or video
//   //it has 3 things position, duration, bufferedPosition
//   //position=> how many seconds the audio has been played
//   //buffered => is the grey line in the slider showing that how much is preloaded content
//   //duration=> total duration of the audio or video
//   //By default useprogress() updates every 1000ms or 1s if we want faster then we we can decrease the value


//   // console.log('progress', progress);
  
//   // Fetch the current track information
//   useEffect(() => {
//     const fetchCurrentTrack = async () => {
//       const trackId = await TrackPlayer.getCurrentTrack();
//       // console.log('trackId', trackId);
      
//       if (trackId !== null) {
//         const track = await TrackPlayer.getTrack(trackId);
//         setCurrentTrack(track);
//       }
//     };

//     fetchCurrentTrack();
//     const subscription = TrackPlayer.addEventListener(Event.PlaybackTrackChanged, fetchCurrentTrack);
//     return () => subscription.remove();
//   }, []);

//   // Function to toggle play/pause
//   const togglePlayback = async () => {
//     const state = playbackState.state || State.None;
//     const currentTrack = await TrackPlayer.getCurrentTrack();
//     if (currentTrack !== null) {
//       if (state === State.Playing) {
//         await TrackPlayer.pause();
//       } else {
//         await TrackPlayer.play();
//       }
//     }
//   };

//   // Function to skip to the next track
//   const skipToNext = async () => {
//     try {
//       await TrackPlayer.skipToNext();
//     } catch (error) {
//       console.error('No next track available', error);
//     }
//   };

//   // Function to skip to the previous track
//   const skipToPrevious = async () => {
//     try {
//       await TrackPlayer.skipToPrevious();
//     } catch (error) {
//       console.error('No previous track available', error);
//     }
//   };

//   // Format time in mm:ss
//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   // Handle slider value change
//   const onSeek = async (value: number) => {
//     await TrackPlayer.seekTo(value);
//   };
//   const animatedHeight = new Animated.Value(isExpanded ? 300 : 100);
//   const toggleCollapse = () => {
//     Animated.timing(animatedHeight, {
//       toValue: isExpanded ? 100 : 300,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//     setIsExpanded(!isExpanded)
//     }
  
//   return (
//     <View style={styles.container}>
//       {/* Track Information */}
//       {currentTrack ? (
//         <>
//           <Image source={{ uri: currentTrack.artwork }} style={styles.artwork} />
//           <Text style={styles.title}>{currentTrack.title || 'Unknown Title'},{currentTrack.album}</Text>
//           <Text style={styles.artist}>{currentTrack.artist || 'Unknown Artist'}</Text>
//         </>
//       ) : (
//         <Text style={styles.noTrack}>No Track Playing</Text>
//       )}

//       {/* Song Progress */}
//       <View style={styles.progressContainer}>
//         <Text style={styles.time}>{formatTime(progress.position)}</Text>
//         <Slider
//           style={styles.slider}
//           minimumValue={0}
//           maximumValue={progress.duration}
//           value={progress.position}
//           onSlidingComplete={onSeek}
//           minimumTrackTintColor="#1FB28A"
//           maximumTrackTintColor="#d3d3d3"
//           thumbTintColor="#1FB28A"
//           // thumbImage={require('../images/UskaHiBanana.jpg')}
//         />
//         <Text style={styles.time}>{formatTime(progress.duration)}</Text>
//       </View>
//       <View>
//       <Pressable style={styles.closeButton} onPress={toggleCollapse}>
// //             <Icon name="close" size={24}              color="#FFFFFF"  />
// //           </Pressable>
//       </View>
      
//       {/* Playback Controls */}
//       <View style={styles.controls}>
//         <Pressable onPress={skipToPrevious}>
//           <Icon name="skip-previous" size={40} style={styles.icon} />
//         </Pressable>
//         <Pressable onPress={togglePlayback}>
//           <Icon
//             name={playbackState.state === State.Playing ? 'pause' : 'play-arrow'}
//             size={50}
//             style={styles.icon}
//           />
//         </Pressable>
//         <Pressable onPress={skipToNext}>
//           <Icon name="skip-next" size={40} style={styles.icon} />
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#004953',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   artwork: {
//     width: 300,
//     height: 300,
//     borderRadius: 15,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   artist: {
//     fontSize: 18,
//     color: '#B0E0E6',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   controls: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//     width: '60%',
//   },
//   icon: {
//     color: '#FFFFFF',
//   },
//   progressContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '90%',
//     marginTop: 20,
//   },
//   slider: {
//     flex: 1,
//     marginHorizontal: 10,
//   },
//   time: {
//     color: '#FFFFFF',
//     fontSize: 14,
//   },
//   noTrack: {
//     fontSize: 18,
//     color: '#B0E0E6',
//     marginBottom: 20,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     zIndex: 10,
//   },
// });

// export default PlayerScreen;









import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity } from 'react-native';
import TrackPlayer, { State, usePlaybackState, useProgress, Event } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlayerScreen = () => {
  const [currentTrack, setCurrentTrack] = useState<any>(null); // State to hold the current track info
  const [isCollapsed, setIsCollapsed] = useState(false); // State to handle collapse/expand
  const playbackState = usePlaybackState(); // Get the playback state
  const progress = useProgress(500); // Get progress with 500ms update interval

  // Fetch the current track information
  useEffect(() => {
    const fetchCurrentTrack = async () => {
      const trackId = await TrackPlayer.getCurrentTrack();
      if (trackId !== null) {
        const track = await TrackPlayer.getTrack(trackId);
        setCurrentTrack(track);
      }
    };

    fetchCurrentTrack();
    const subscription = TrackPlayer.addEventListener(Event.PlaybackTrackChanged, fetchCurrentTrack);
    return () => subscription.remove();
  }, []);

  // Function to toggle play/pause
  const togglePlayback = async () => {
    const state = playbackState.state || State.None;
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (state === State.Playing) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    }
  };

  // Function to skip to the next track
  const skipToNext = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (error) {
      console.error('No next track available', error);
    }
  };

  // Function to skip to the previous track
  const skipToPrevious = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (error) {
      console.error('No previous track available', error);
    }
  };

  // Format time in mm:ss
  const formatTime = (seconds:number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Handle slider value change
  const onSeek = async (value:number) => {
    await TrackPlayer.seekTo(value);
  };

  // Toggle between collapsed and expanded view
  // const toggleCollapse = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
    <View style={[styles.container, isCollapsed && styles.collapsedContainer]}>
      {/* Collapsed View */}
      {/* {isCollapsed ? (
        <TouchableOpacity style={styles.collapsedBar} onPress={toggleCollapse}>
          <Text style={styles.collapsedText}>{currentTrack?.title || 'No Track Playing'}</Text>
        </TouchableOpacity>
      ) : ( */}
        <>
          {/* Expanded View */}
          {/* <Pressable style={styles.closeButton} onPress={toggleCollapse}>
            <Icon name="close" size={24} color="#FFFFFF" />
          </Pressable> */}

          {/* Track Information */}
          {currentTrack ? (
            <>
              <Image source={{ uri: currentTrack.artwork }} style={styles.artwork} />
              <Text style={styles.title}>
                {currentTrack.title || 'Unknown Title'} {currentTrack.album && `, ${currentTrack.album}`}
              </Text>
              <Text style={styles.artist}>{currentTrack.artist || 'Unknown Artist'}</Text>
            </>
          ) : (
            <Text style={styles.noTrack}>No Track Playing</Text>
          )}

          {/* Song Progress */}
          <View style={styles.progressContainer}>
            <Text style={styles.time}>{formatTime(progress.position)}</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={progress.duration}
              value={progress.position}
              onSlidingComplete={onSeek}
              minimumTrackTintColor="#1FB28A"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#1FB28A"
            />
            <Text style={styles.time}>{formatTime(progress.duration)}</Text>
          </View>

          {/* Playback Controls */}
          <View style={styles.controls}>
            <Pressable onPress={skipToPrevious}>
              <Icon name="skip-previous" size={40} style={styles.icon} />
            </Pressable>
            <Pressable onPress={togglePlayback}>
              <Icon
                name={playbackState.state === State.Playing ? 'pause' : 'play-arrow'}
                size={50}
                style={styles.icon}
              />
            </Pressable>
            <Pressable onPress={skipToNext}>
              <Icon name="skip-next" size={40} style={styles.icon} />
            </Pressable>
          </View>
        </>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004953',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  collapsedContainer: {
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  collapsedBar: {
    width: '100%',
    backgroundColor: '#004953',
    padding: 10,
    borderRadius: 10,
  },
  collapsedText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
  },
  artwork: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  artist: {
    fontSize: 18,
    color: '#B0E0E6',
    textAlign: 'center',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '60%',
  },
  icon: {
    color: '#FFFFFF',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  time: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  noTrack: {
    fontSize: 18,
    color: '#B0E0E6',
    marginBottom: 20,
  },
});

export default PlayerScreen;
