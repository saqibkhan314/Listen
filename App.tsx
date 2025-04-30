
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


import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { setupPlayer } from './src/utils/musicPlayerService';
// import MusicPlayer from './screens/MusicPlayer';
import AllSongs from './src/screens/AllSongs';
import hello from './src/screens/ArijitSingh';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SongInfo from './src/components/SongInfo';
import SongSlider from './src/screens/PlayerScreen';
import ControlCenter from './src/components/ControlCenter';
// import { currentState } from './screens/ArijitSingh';
import { arijitList } from './src/assets/songs/ArijitSongs';
import ArijitSingh from './src/screens/ArijitSingh';
import PlayerScreen from './src/screens/PlayerScreen';
import MusicContextProvider from './src/context/MusicContextProvider';
import MusicBar from './src/utils/MusicBar';
// import MusicContext from './src/context/MusicContextProvider';
// import SplashScreen from 'react-native-splash-screen';


export type RootStackParamList = {
  ArijitSingh: undefined;
  AllSongs: undefined;
  PlayerScreen: { track: any };
};

// const {setCurrentRoute} = useContext(MusicContext)
const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    try {
      let isSetup = await setupPlayer();
      if (isSetup) {
        // await currentState(arijitList);
        console.log("player setup is readybuihguihgui");
        
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
    <MusicContextProvider>
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
          options={{
            headerShown: false,
          }}
        />
                {/* <MusicBar /> */}
           
      </Stack.Navigator>
    
      <MusicBar />
    </NavigationContainer>
    </MusicContextProvider>
    
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
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import AllSongs from './components/AllSongs';
// import ArijitSingh from './ArijitSingh';
// import PlayerScreen from './components/PlayerScreen';
// import MusicContextProvider from './context/MusicContextProvider';
// import MusicBar from '../MusicBar';
// // import SplashScreenAnimation from './SplashScreenAnimation'; // Import animated splash

// const Stack = createNativeStackNavigator();

// function App() {
//   // const [showSplash, setShowSplash] = useState(true);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setShowSplash(false); // Hide splash after animation
//   //   }, 2500); // Matches animation duration
//   // }, []);

//   // if (showSplash) {
//   //   return <SplashScreenAnimation onFinish={() => setShowSplash(false)} />;
//   // }

//   return (
//     <MusicContextProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="AllSongs">
//           <Stack.Screen
//             name="AllSongs"
//             component={AllSongs}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen name="ArijitSingh" component={ArijitSingh} />
//           <Stack.Screen
//             name="PlayerScreen"
//             component={PlayerScreen}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//         <MusicBar />
//       </NavigationContainer>
//     </MusicContextProvider>
//   );
// }

// export default App;
