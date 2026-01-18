import { useState } from 'react'
import ThreeDee from './components/ThreeDee'
import Header from './components/Header'
import Content from './components/Content'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CamContext } from './context/contexts'
import './App.css'

function App() {
  let [camState, setCamState] = useState(0);
  return (
    <>
      <CamContext.Provider value={camState}>
        <Header />
        <div className="app-wrapper">
          <div className="3d-container">
            <ThreeDee />
          </div>
        </div>
      </CamContext.Provider>
    </>
  )
}

export default App
