import React from 'react'
import Herosection from './components/Herosection'
import Cardsection from './components/Cardsection'
import Numbers from './components/Numbers'
import Stepssec from './components/Stepssec'
import Downloadsec from './components/Downloadsec'
import Expert from './components/Expert'
import Mobilecarosal from './components/Mobilecarosal'
import Zoomsec from './components/Zoomsec'
import Trustedcompany from './components/Trustedcompany'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
     
      <Herosection/>
      <Cardsection/>
      {/* <Section3/> */}
      <Numbers/>
      <Stepssec/>
      <Downloadsec/>
      <Expert/>
      <Mobilecarosal/>
      <Zoomsec/> 
       <Trustedcompany/> 
       <Footer/> 
    </>
  )
}

export default App