import { useState } from 'react'
import ThreeDee from './components/ThreeDee'
import Header from './components/Header'
import Content from './components/Content'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="app-wrapper">
        <div className="content-wrapper">
          <div className="content-container-right">
            <div className="spacer"></div>
            <Content>
              <h2>Hi 👋</h2>
              <p>I'm Jack Bittner.  I'm a software engineer.  And I like to write code.</p>
              <br/>
              <p style={{marginBottom: "0px"}}>Specifically, I use</p>
              <code>C, C++, C#, JavaScript, TypeScript and Java</code>
            </Content>
            <Content>
              <h2>Work History 💼</h2>
              <ul>
                <li>
                  <div className="resume-container">
                    <h3 className="resume-header">Northwestern Mutual</h3>
                    <p className="resume-header-secondary">July 2024 - Present</p>
                  </div>
                  <div className="resume-container">
                    <p>Contract Software Engineer</p>
                    <p className="resume-secondary"><i>Remote</i></p>
                  </div>
                </li>
                <li>
                  <div className="resume-container">
                    <h3 className="resume-header">Bare Home</h3>
                    <p className="resume-header-secondary">January 2023 - October 2023</p>
                  </div>
                  <div className="resume-container">
                    <p>Digital Marketing Specialist</p>
                    <p className="resume-secondary"><i>Columbus, MN</i></p>
                  </div>
                </li>
              </ul>
              <h2>Education 🏫</h2>
              <ul>
                <li>
                  <div className="resume-container">
                    <h3 className="resume-header">University of Minnesota Boot Camps</h3>
                    <p className="resume-header-secondary">December 2023 - March 2024</p>
                  </div>
                  <div className="resume-container">
                    <p>Software Development Certification</p>
                    <p className="resume-secondary"><i>4.0 GPA</i></p>
                  </div>
                </li>
                <li>
                  <div className="resume-container">
                    <h3 className="resume-header">University of Northwestern, St. Paul</h3>
                    <p className="resume-header-secondary">August 2018 - December 2022</p>
                  </div>
                  <div className="resume-container">
                    <p>B.S Marketing</p>
                    <p className="resume-secondary"><i>3.5 GPA</i></p>
                  </div>
                </li>
              </ul>
            </Content>
          </div>
          <div className="content-container-left">
            <Content>
              <h2>Selected Contributions</h2>
              <ul>
                <li>
                  <div className="resume-container">
                    <h3 className="resume-header">gonkville.com</h3>
                    <code className="resume-header-secondary">JavaScript, SvelteKit</code>
                    <a href="https://gonkville.com">Link</a>
                  </div>
                  <div className="resume-container">
                    <p>In 2024, I created a children's book series entitled Gonkville.  I wanted to grow my platform and branch out into doing animations and games but for that I needed a website.  At work, I had been experimenting with SvelteKit and decided it was the ideal framework for what I needed.  The result was a pleasant-looking website reminiscent of the late 00s.</p>
                  </div>
                </li>
              </ul>              
            </Content>
          </div>
          <div className="content-container-right">
            <Content>
              <h2>Personal Projects</h2>
              <ul>
                <li>
                  <div className="resume-container">
                    <h3 className="resume-header">gonkville.com</h3>
                    <code className="resume-header-secondary">JavaScript, SvelteKit</code>
                    <a href="https://gonkville.com">Link</a>
                  </div>
                  <div className="resume-container">
                    <p>In 2024, I created a children's book series entitled Gonkville.  I wanted to grow my platform and branch out into doing animations and games but for that I needed a website.  At work, I had been experimenting with SvelteKit and decided it was the ideal framework for what I needed.  The result was a pleasant-looking website reminiscent of the late 00s.</p>
                  </div>
                </li>
                <li>
                  <div className="resume-container">
                    <h3 className="resume-header">AlphaRing Halo Mod Fork</h3>
                    <code className="resume-header-secondary">C++</code>
                    <a href="https://github.com/thejackbitt/AlphaRing/tree/master-chief">Github</a>
                  </div>
                  <div className="resume-container">
                    <p>AlphaRing is an open source mod project for <i>Halo: The Master Chief Collection</i> that introduces local multiplayer splitscreen.  I identified an area of improvement (saving user settings locally) and created my own fork of this project.  My change adds a JSON interpreter that saves user settings to disk whenever changes are made and loads them upon startup.</p>
                  </div>
                </li>
                <li>
                  <div className="resume-container">
                    <h3 className="resume-header">Middle Zealand Tweaks</h3>
                    <code className="resume-header-secondary">Java</code>
                    <a href="https://github.com/thejackbitt/middle-zealand-tweaks">Github</a>
                  </div>
                  <div className="resume-container">
                    <p><i>Middle Zealand Tweaks</i> is a mod I created for Minecraft.  It acts as a bridge for two mods (The Lord of the Rings and Battlegear 2) as well as adding custom weapons and a "killstreak" system that rewards players for defeating orcs.  While Battlegear 2 is open source, I had to decompile the Lord of the Rings mod to reference it in my code.  Due to distribution guidelines, I am not able to share the modpack that combines all the mods but players can use this mod in conjunction with the two mods mentioned to get the full effect.</p>
                  </div>
                </li>
              </ul>
            </Content>
          </div>
        </div>
        <div className="3d-container">
          <ThreeDee />
        </div>
      </div>
    </>
  )
}

export default App
