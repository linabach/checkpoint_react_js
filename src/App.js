import React from 'react'
import NavBar from './components/NavBar'
import SlideShow from './components/SlideShow'


const images = [
  'house1.jpg',
  'house8.jpg',
  'house4.jpg',
];

const App = () => {
  return (
    <div>
      <NavBar/>
      <SlideShow images={images} />
      
    </div>
  )
}

export default App
