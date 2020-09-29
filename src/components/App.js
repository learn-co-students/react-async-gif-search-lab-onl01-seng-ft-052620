import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
      < NavBar color='black' title="Giphy Search" />
      <GifListContainer />
    </div>
  )
}

export default App


//key url : https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=73qOrQjOU3mLX1KTGYVHXFer1S5xogY5&rating=g
