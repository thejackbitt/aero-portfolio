import { useState } from 'react'
import ThreeDee from './components/ThreeDee'
import Header from './components/Header'
import Content from './components/Content'
import Button from './components/Button'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CamContext } from './context/contexts'
import './App.css'

function App() {
  let [camState, setCamState] = useState(0);

  function changeView(camPos) {
    setCamState(camPos);
  }

  return (
    <>
      <CamContext.Provider value={{ camState, setCamState }}>
        <Header />
        <div className="app-wrapper">
        <div className="content-wrapper">
          <div className="content-container-right">
            <div className="spacer"></div>
            <Content>
          <Button click={() => changeView(0)}>About</Button>
          {/* <Button click={() => changeView(500)}>Work History</Button>
          <Button click={() => changeView(1000)}>Personal Projects</Button> */}
            </Content>
            </div>
            </div>
          <div className="3d-container">
            <ThreeDee />
          </div>
        </div>
      </CamContext.Provider>
    </>
  )
}

export default App
