import React from 'react'
import Card from './Components/Card.jsx'

const App = () => {
  return (
    <div className='parent'>
     <Card  artist = "Shawn Mendes" number = "#1" song = "There's nothing holding me back " img = "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     <Card artist = "Niall Horan" number = "#2" song = "No Judgment" img = "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     <Card artist = "Adele" number = "#3" song = "Rolling in the deep" img = "https://images.unsplash.com/photo-1635491512913-bd473a066d1d?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App