
// import React,{useState,useEffect} from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   ActivityIndicator,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';


// import {setupPlayer, addTrack} from '../musicPlayerService'
// import MusicPlayer from './screens/MusicPlayer';


// function App(): React.JSX.Element {
  
//   const [isPlayerReady, setIsPlayerReady] = useState(false)

//   async function setup() {
//     let isSetup = await setupPlayer()
//     if(isSetup){
//       await addTrack()
//     }
//     setIsPlayerReady(isSetup)
//   }
//   useEffect(() => {
//     setup()
//   },[])

//   if(!isPlayerReady){
//     return (
//       <SafeAreaView>
//       <ActivityIndicator/>
//     </SafeAreaView>
//     )
   
//   }
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={"light-content"}/>
//       <MusicPlayer/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1
//   }
// });

// export default App;











// import React, { useState, useEffect } from 'react';
// import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
// import { setupPlayer, addTrack } from '../musicPlayerService';
// import MusicPlayer from './screens/MusicPlayer';
// import AllSongs from './components/AllSongs';

// import hello from './screens/hello';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';


// export type RootStackParamList = {
//  hello: undefined
//  AllSongs: undefined
// }
// const Stack = createNativeStackNavigator<RootStackParamList>();

// function App(): React.JSX.Element {
//   const [isPlayerReady, setIsPlayerReady] = useState(false);

//   async function setup() {
//     let isSetUp = await setupPlayer();
//     console.log("isSetUp",isSetUp)

//     if (isSetUp) {
//       await addTrack();
//     }

//   } 

//   useEffect(() => {
//     setup();
//   }, []);
// console.log("isPlayerReady",isPlayerReady)
//   if (!isPlayerReady) {
//     return (
//       <SafeAreaView style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="white" />
//       </SafeAreaView>
//     );
//   }

//   return (

   
//     <><NavigationContainer>
//       <Stack.Navigator initialRouteName="AllSongs">
//         <Stack.Screen name="AllSongs" component={AllSongs} />
//         <Stack.Screen name="hello" component={hello} />
//       </Stack.Navigator>
//     </NavigationContainer>


//       <View style={styles.container}>
//         <StatusBar barStyle="light-content" />



//       // </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;










// import React, {useState, useEffect} from "react"

// import type {PropsWithChildren} from 'react';
// import {
//   ActivityIndicator,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import { setupPlayer, addTrack } from '../musicPlayerService'
// import MusicPlayer from "./screens/MusicPlayer";


// import AllSongs from './components/AllSongs';

// import hello from './screens/hello';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';


// export type RootStackParamList = {
//  hello: undefined
//  AllSongs: undefined
// }
// const Stack = createNativeStackNavigator<RootStackParamList>();

// function App(): JSX.Element {
//   const [isPlayerReady, setIsPaylerReady] = useState(false)

//   async function setup(){
//     let isSetup = await setupPlayer()

//     if (isSetup) {
//       await addTrack()
//     }

//     setIsPaylerReady(isSetup)
//   }

//   useEffect(() => {
//     setup()
//   }, [])
  
//   if (!isPlayerReady) {
//     return (
//       <SafeAreaView>
//         <ActivityIndicator />
//       </SafeAreaView>
//     )
//   }

//   return (

   
//         <><NavigationContainer>
//           <Stack.Navigator initialRouteName="AllSongs">
//             <Stack.Screen name="AllSongs" component={AllSongs} />
//             <Stack.Screen name="hello" component={hello} />
//           </Stack.Navigator>
//         </NavigationContainer>
    
    
//           <View style={styles.container}>
//             <StatusBar barStyle="light-content" />
    
    
    
//           // </View>
//         </>
//       );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex: 1
//   }
// });

// export default App;






//Main code


import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { setupPlayer } from '../musicPlayerService';
// import MusicPlayer from './screens/MusicPlayer';
import AllSongs from './components/AllSongs';
import hello from './ArijitSingh';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SongInfo from './components/SongInfo';
import SongSlider from './components/PlayerScreen';
import ControlCenter from './components/ControlCenter';
// import { currentState } from './screens/ArijitSingh';
import { arijitList } from './assets/songs/ArijitSongs';
import ArijitSingh from './ArijitSingh';
import PlayerScreen from './components/PlayerScreen';

export type RootStackParamList = {
  ArijitSingh: undefined;
  AllSongs: undefined;
  PlayerScreen: { track: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    try {
      let isSetup = await setupPlayer();
      if (isSetup) {
        // await currentState(arijitList);
        console.log("player setup is ready");
        
      }
      setIsPlayerReady(isSetup);
    } catch (error) {
      console.error('Setup failed', error);
    }
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="white" />
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AllSongs" >
        <Stack.Screen
         name="AllSongs" 
         component={AllSongs} 
         options={{headerShown: false}}
         />
        <Stack.Screen name="ArijitSingh" component={ArijitSingh} />
        <Stack.Screen
          name="PlayerScreen"
          component={PlayerScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;







// import React, { useState, useEffect } from 'react';
// import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';
// import { setupPlayer } from '../musicPlayerService';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';

// // Screens
// import AllSongs from './components/AllSongs';
// import ArijitSingh from './screens/ArijitScreen/ArijitSingh';
// import SongInfo from './components/SongInfo';
// import { Track } from 'react-native-track-player';

// // Define types for navigation routes
// export type RootStackParamList = {
//   AllSongs: undefined;
//   ArijitSingh: undefined;
//   SongInfo: {
//     track: Track; // Replace `Track` with your actual track type
//   };
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// function App(): React.JSX.Element {
//   const [isPlayerReady, setIsPlayerReady] = useState(false);

//   // Set up the music player service
//   async function setup() {
//     try {
//       const isSetup = await setupPlayer();
//       if (isSetup) {
//         console.log('Music player is ready.');
//       }
//       setIsPlayerReady(isSetup);
//     } catch (error) {
//       console.error('Setup failed', error);
//     }
//   }

//   useEffect(() => {
//     setup();
//   }, []);

//   // Show a loader while the player is being set up
//   if (!isPlayerReady) {
//     return (
//       <SafeAreaView style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="white" />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="AllSongs">
//         {/* Main Song List Screen */}
//         <Stack.Screen name="AllSongs" component={AllSongs} options={{ headerShown: false }} />

//         {/* Arijit Singh's Song List */}
//         <Stack.Screen
//           name="ArijitSingh"
//           component={ArijitSingh}
//           options={{ title: 'Arijit Singh Songs' }}
//         />

//         {/* Detailed Song Info */}
//         <Stack.Screen
//           name="SongInfo"
//           component={SongInfo}
//           options={{ title: 'Song Details' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#004953',
//   },
// });

// export default App;
