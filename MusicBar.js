// import { View, Text, StyleSheet,TouchableOpacity, Pressable,Image } from 'react-native'
// import React, { useContext } from 'react'
// import MusicContext from './src/context/MusicContext'
// import { arijitList } from './assets/songs/ArijitSongs';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import { useNavigation } from '@react-navigation/native';

// const MusicBar = () => {
//   const {currentTrack} = useContext(MusicContext)

//   const navigation = useNavigation();
//   const playBackState = usePlaybackState();
//    const togglePlayback = async (playback) => {
//         const state = await TrackPlayer.getCurrentTrack();
//         if (state !== null) {
//           if (playback === State.Paused || playback === State.Ready) {
//             await TrackPlayer.play();
//           } else {
//             await TrackPlayer.pause();
//           }
//         }
//       };
//   return (
      
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
//   )
// }


// const styles = StyleSheet.create({
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
// })


// export default MusicBar











//MAIN CODE




// import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
// import React, { useContext } from 'react';
// import MusicContext from './src/context/MusicContext';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure this import

// const MusicBar = () => {
//   const { currentTrack } = useContext(MusicContext);
//   const navigation = useNavigation();
//   const playBackState = usePlaybackState();

//   // console.log("navigation:", navigation);
//   // console.log("playBackState:", playBackState);
  
//   const togglePlayback = async (playback) => {
//     const state = await TrackPlayer.getCurrentTrack();
//     if (state !== null) {
//       if (playback === State.Paused || playback === State.Ready) {
//         await TrackPlayer.play();
//       } else {
//         await TrackPlayer.pause();
//       }
//     }
//   };

//   if (!currentTrack) {
//     return null; // Avoid rendering if no current track is available
//   }


//   return (
//     <View style={styles.songBar}>
//       <TouchableOpacity onPress={() => navigation.navigate('PlayerScreen', { track: currentTrack })}>
//         <Image source={{ uri: currentTrack.artwork }} style={styles.songBarImage} />
//         <Text style={styles.songBarText}>{currentTrack.title}</Text>
//       </TouchableOpacity>

//       <Pressable onPress={() => togglePlayback(playBackState.state || State.None)}>
//         <Icon
//           style={styles.icon}
//           name={playBackState.state === State.Playing ? 'pause' : 'play-arrow'}
//           size={40}
//         />
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   songBar: {
//     width: '100%',
//     height: 70,
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
//   icon: {
//     color: 'white',
//   },
// });

// export default MusicBar;















// import React, { useContext, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
// import MusicContext from './src/context/MusicContext';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Modal from 'react-native-modal';
// import PlayerScreen from './src/components/PlayerScreen';

// const MusicBar = () => {
//   const { currentTrack } = useContext(MusicContext);
//   const navigation = useNavigation();
//   const playBackState = usePlaybackState();
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const togglePlayback = async (playback) => {
//     const current = await TrackPlayer.getCurrentTrack();
//     if (current !== null) {
//       if (playback === State.Paused || playback === State.Ready) {
//         await TrackPlayer.play();
//       } else {
//         await TrackPlayer.pause();
//       }
//     }
//   };

//   // If no track is playing, don't render the bar
//   if (!currentTrack) {
//     return null;
//   }

//   return (
//     <>
//       {/* Persistent Music Bar */}
      
//       <View style={styles.songBar}>
      
//         <TouchableOpacity onPress={() => setIsModalVisible(true)}>
//           <Image source={{ uri: currentTrack.artwork }} style={styles.songBarImage} />
//           <Text style={styles.songBarText}>{currentTrack.title}</Text>
//         </TouchableOpacity>
//         <Pressable onPress={() => togglePlayback(playBackState.state || State.None)}>
//           <Icon
//             style={styles.icon}
//             name={playBackState.state === State.Playing ? 'pause' : 'play-arrow'}
//             size={40}
//           />
//         </Pressable>
//       </View>

//       {/* Full Screen Modal with Draggable Handle */}
//       <Modal
//         isVisible={isModalVisible}
//         onBackdropPress={() => setIsModalVisible(false)}
//         swipeDirection={["down",'up','right']}
//         onSwipeComplete={() => setIsModalVisible(false)}
//         style={styles.modalStyle}
//       >
//        <PlayerScreen/>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   songBar: {
//     width: '100%',
//     height: 70,
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
//   icon: {
//     color: 'white',
//     marginLeft: 'auto',
//   },
//   modalStyle: {
//     margin: 0, // Full screen modal
//   },
//   modalContentFull: {
//     flex: 1,
//     backgroundColor: '#002E2E',
//     padding: 20,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   handleContainer: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   handle: {
//     width: 50,
//     height: 5,
//     backgroundColor: '#ccc',
//     borderRadius: 2.5,
//   },
//   modalTitle: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   modalImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 8,
//     marginBottom: 10,
//     alignSelf: 'center',
//   },
//   modalTrackTitle: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   modalControls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default MusicBar;























// import React, { useContext, useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   Image,
//   PanResponder,
// } from 'react-native';
// import MusicContext from './src/context/MusicContext';
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Modal from 'react-native-modal';
// import PlayerScreen from './src/components/PlayerScreen';

// const MusicBar = () => {
//   const { currentTrack } = useContext(MusicContext);
//   const navigation = useNavigation();
//   const playBackState = usePlaybackState();
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   // Toggle play/pause functionality remains the same.
//   const togglePlayback = async (playback) => {
//     const current = await TrackPlayer.getCurrentTrack();
//     if (current !== null) {
//       if (playback === State.Paused || playback === State.Ready) {
//         await TrackPlayer.play();
//       } else {
//         await TrackPlayer.pause();
//       }
//     }
//   };

//   // If no track is playing, do not render the MusicBar.
//   if (!currentTrack) {
//     return null;
//   }

//   // Create a PanResponder to detect upward swipe gestures.
//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderRelease: (evt, gestureState) => {
//         // Check if the vertical swipe (dy) is significant and upward.
//         if (gestureState.dy < -30) {
//           setIsModalVisible(true);
//         }
//       },
//     })
//   ).current;

//   return (
//     <>
//       {/* Persistent Music Bar with PanResponder for swipe-up gesture */}
//       <View style={styles.songBar} {...panResponder.panHandlers}>
//         <Image
//           source={{ uri: currentTrack.artwork }}
//           style={styles.songBarImage}
//         />
//         <Text style={styles.songBarText}>{currentTrack.title}</Text>
//         <Pressable
//           onPress={() => togglePlayback(playBackState.state || State.None)}
//         >
//           <Icon
//             style={styles.icon}
//             name={
//               playBackState.state === State.Playing ? 'pause' : 'play-arrow'
//             }
//             size={40}
//           />
//         </Pressable>
//       </View>

//       {/* Full Screen Modal for PlayerScreen */}
//       <Modal
//         isVisible={isModalVisible}
//         onBackdropPress={() => setIsModalVisible(false)}
//         swipeDirection="down"
//         onSwipeComplete={() => setIsModalVisible(false)}
//         style={styles.modalStyle}
//       >
//         <PlayerScreen />
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   songBar: {
//     width: '100%',
//     height: 70,
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
//   icon: {
//     color: 'white',
//     marginLeft: 'auto'
//   },
//   modalStyle: {
//     margin: 0, // Full screen modal
//     // // borderBottomLeftRadius:100,
//     // borderBottomStartRadius:50
//   },
// });

// export default MusicBar;











import React, { useContext, useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, PanResponder } from 'react-native';
import MusicContext from './src/context/MusicContext';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import PlayerScreen from './src/components/PlayerScreen';

const MusicBar = () => {
  const { currentTrack } = useContext(MusicContext);
  const navigation = useNavigation();
  const playBackState = usePlaybackState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const panResponder = useRef();

  useEffect(() => {
    panResponder.current = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        // Detect upward swipe to open the PlayerScreen modal.
        if (gestureState.dy < -30) {
          setIsModalVisible(true);
        }
      },
    });
  }, []);

  const togglePlayback = async (playback) => {
    const current = await TrackPlayer.getCurrentTrack();
    if (current !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  // If no track is playing, don't render the bar
  if (!currentTrack) {
    return null;
  }

  return (
    <>
      {/* Persistent Music Bar */}
      <View {...panResponder.current?.panHandlers} style={styles.songBar}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Image source={{ uri: currentTrack.artwork }} style={styles.songBarImage} />
          <Text style={styles.songBarText}>{currentTrack.title}</Text>
        </TouchableOpacity>
        <Pressable onPress={() => togglePlayback(playBackState.state || State.None)}>
          <Icon
            style={styles.icon}
            name={playBackState.state === State.Playing ? 'pause' : 'play-arrow'}
            size={40}
          />
        </Pressable>
      </View>

      {/* Full Screen Modal */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        swipeDirection={["down", "up", "right"]}
        onSwipeComplete={() => setIsModalVisible(false)}
        style={styles.modalStyle}
      >
        <PlayerScreen />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  songBar: {
    width: '100%',
    height: 70,
    backgroundColor: '#002E2E',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  songBarImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  songBarText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    color: 'white',
    marginLeft: 'auto',
  },
  modalStyle: {
    margin: 0, // Full screen modal
  },
  modalContentFull: {
    flex: 1,
    backgroundColor: '#002E2E',
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default MusicBar;
