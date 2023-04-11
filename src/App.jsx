import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, SocialBar, Footer } from './components'
import { Home, About, Contact, PastGames, NotFound, UnderConstruction, Insta } from './pages/index';
import './index.css';
import styles from './style'
// require('dotenv').config()


class App extends Component {
  // require('dotenv').config()

  render() {
    require('dotenv').config()

    return (
       <Router>
          <div className="App">
            {/* NAVBAR */}
            <div className='relative'>
              <div className='fixed top-0 left-0 right-0 z-50'>
                <div className='w-full overflow-hidden bg-red'>
                  <div className={`px-8 xs:px-10 ${styles.flexCenter}`}>
                    <div className={`w-full`}>
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
            <div className='mt-[130px] xm:mt-[116px]'>
              <Routes>
                {/* Completed Pages */}
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
                <Route exact path='/pastgames' element={< PastGames/>}></Route>
                {/* Underconstruction Pages */}
                <Route exact path='/events' element={< UnderConstruction />}></Route>
                <Route exact path='/teams' element={< UnderConstruction />}></Route>
                <Route exact path="/apexlegends" element={< UnderConstruction /> }></Route>
                <Route exact path="/callofduty" element={< UnderConstruction /> }></Route>
                <Route exact path="/csgo" element={< UnderConstruction /> }></Route>
                <Route exact path="/dota2" element={< UnderConstruction /> }></Route>
                <Route exact path="/hearthstone" element={< UnderConstruction /> }></Route>
                <Route exact path="/leagueoflegends" element={< UnderConstruction /> }></Route>
                <Route exact path="/overwatch" element={< UnderConstruction /> }></Route>
                <Route exact path="/rainbowsixsiege" element={< UnderConstruction /> }></Route>
                <Route exact path="/rocketleague" element={< UnderConstruction /> }></Route>
                <Route exact path="/valorant" element={< UnderConstruction /> }></Route>
                <Route exact path="/constitution" element={< UnderConstruction /> }></Route>
                <Route exact path="/rules" element={< UnderConstruction /> }></Route>

                {/* 404 Error */}
                <Route path='*' element={<NotFound />}/>
              </Routes>
              {/* <Insta token={process.env.REACT_APP_INS_TOKEN} limit={12}/> */}

              <div className='w-full overflow-hidden bg-black'>
                <div className={`bg-primary ${styles.flexStart}`}>
                   <div className={`w-full px-10`}>
                       <Footer />
                    </div>
                </div>
            </div>
            </div>
            {/* Version ONLY FOR TESTING */}
            <div className='version'>Version: 1.0.0</div>
          </div>
       </Router>
   );
  }
}
  
export default App;