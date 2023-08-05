import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, SocialBar } from './components'
import './index.css';
import styles from './style'
import { lazy, Suspense } from 'react';
import Teams from './pages/Teams';
import Dota2 from './pages/teams/Dota2';
// import Home from './pages/Home';

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))
const UnderConstruction = lazy(() => import("./pages/UnderConstruction"))
const NotFound = lazy(() => import("./pages/NotFound"))
// const PastGames = lazy(() => import("./pages/PastGames"))
const Footer = lazy(() => import("./components/Footer"))

class App extends Component {
  render() {
    return (
       <Router>
          <div className="App">
            {/* NAVBAR */}
            <div className='relative'>
              <div className='fixed top-0 left-0 right-0 z-50'>
                <div className='w-full overflow-hidden bg-red'>
                  <div className={`px-8 xs:px-10 ${styles.flexCenter}`}>
                    <div className={`w-full `}>
                      <Navbar />
                    </div>
                  </div>
                </div>
                <div className='w-full overflow-hidden bg-black border-b-[3px] border-red'>
                  <div className={`px-0 xs:px-16 ${styles.flexCenter}`}>
                    <div className={`w-full`}>
                      <SocialBar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>

              <div className='mt-[75px] xm:mt-[85px]'>
                <Routes>
                  {/* Completed Pages */}
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/about' element={< About />}></Route>
                  <Route exact path='/contact' element={< Contact />}></Route>
                  {/* <Route exact path='/pastgames' element={< PastGames/>}></Route> */}
                  {/* Underconstruction Pages */}
                  <Route exact path='/events' element={< UnderConstruction />}></Route>
                  
                  <Route exact path='/teams' element={< Teams />}></Route>
                  <Route exact path="/teams/apexlegends" element={< UnderConstruction /> }></Route>
                  <Route exact path="/teams/callofduty" element={< UnderConstruction /> }></Route>
                  <Route exact path="/teams/csgo" element={< UnderConstruction /> }></Route>
                  <Route exact path="/teams/dota2" element={< Dota2 /> }></Route>
                  <Route exact path="/teams/hearthstone" element={< UnderConstruction /> }></Route>
                  <Route exact path="/teams/league of legends" element={< UnderConstruction /> }></Route>
                  <Route exact path="/teams/overwatch" element={< UnderConstruction /> }></Route>
                  <Route exact path="/teams/rainbowsixsiege" element={< UnderConstruction /> }></Route>
                  <Route exact path="/teams/rocketleague" element={< UnderConstruction /> }></Route>
                  <Route exact path="/teams/valorant" element={< UnderConstruction /> }></Route>
                  <Route exact path="/constitution" element={< UnderConstruction /> }></Route>
                  <Route exact path="/rules" element={< UnderConstruction /> }></Route>
                  {/* 404 Error */}
                  <Route path='*' element={<NotFound />}/>
                </Routes>


                <div className='w-full overflow-hidden bg-black'>
                  <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`w-full px-10`}>

                        <Footer />
                      </div>
                  </div>
              </div>
              </div>
              </Suspense>

            {/* Version ONLY FOR TESTING */}
            {/*<div className='version'>Version: 1.0.0</div>*/}
          </div>
       </Router>
   );
  }
}
  
export default App;