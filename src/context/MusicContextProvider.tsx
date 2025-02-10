import React, {  useState } from 'react'
import MusicContext from './MusicContext'

const MusicContextProvider = ({children}: any) =>{
   const [currentTrack, setCurrentTrack] = useState<any>(null);
   const [initialTrackPlayingId, setInitialTrackPlayingId] = useState<string | null>(null);
  //  const [currentRoute, setCurrentRoute] = useState();
  return (
    <MusicContext.Provider value={{currentTrack, setCurrentTrack, initialTrackPlayingId, setInitialTrackPlayingId}}>
    {children}
    </MusicContext.Provider>
  )
}

export default  MusicContextProvider;