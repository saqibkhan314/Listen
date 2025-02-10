
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
import { setupPlayer } from '../musicPlayerService';
// import MusicPlayer from './screens/MusicPlayer';
import AllSongs from './components/AllSongs';
import hello from './ArijitSingh';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SongInfo from './components/SongInfo';
import SongSlider from './components/PlayerScreen';
import ControlCenter from './components/ControlCenter';
// import { currentState } from './screens/ArijitSingh';
import { arijitList } from './assets/songs/ArijitSongs';
import ArijitSingh from './ArijitSingh';
import PlayerScreen from './components/PlayerScreen';
import MusicContextProvider from './context/MusicContextProvider';
import MusicBar from '../MusicBar';
import MusicContext from './context/MusicContext';


export type RootStackParamList = {
  ArijitSingh: undefined;
  AllSongs: undefined;
  PlayerScreen: { track: any };
};

// const {setCurrentRoute} = useContext(MusicContext)
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






