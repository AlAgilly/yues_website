// import React, { Component } from 'react'
// import styles from './style'
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

// import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components'
// import Home from './components/pages/home';
// import About from './components/pages/about';
// import Contact from './components/pages/contact';
// import Team from './components/pages/team';

// class App extends Component {
//   render() {
//     return (
//       <Router>
// <div className='w-full overflow-hidden bg-red'>
//     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Navbar />
//       </div>
//     </div>

//     <div className={`bg-primary ${styles.flexStart} hero`}>
//       <div className={`${styles.boxWidth}`}>
//         <Hero />
//       </div>
//     </div>

//     <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Stats />
//         <Business />
//         <Billing />
//         <CardDeal />
//         <Testimonials />
//         <Clients />
//         <CTA />
//         <Footer />
//       </div>
//     </div>

//   </div>
// </Router>
//     );
//   }
// }

// export default App


import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Footer } from './components'


import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import Teams from './pages/Teams';
import CSGO from './pages/teams/CSGO';
import Events from './pages/Events';
import NotFound from './pages/NotFound';
import './index.css';
import styles from './style'
import SocialBar from './components/SocialBar';

  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
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
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/teams' element={< Teams />}></Route>
                 <Route exact path="/teams/csgo" element={< CSGO /> }></Route>
                 <Route exact path='/events' element={< Events />}></Route>
                 <Route path='*' element={<NotFound />}/>
          </Routes>
          <div className='version'>Version: 1.0.0</div>
          </div>
       </Router>
   );
  }
}
  
export default App;