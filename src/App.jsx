import IndexNavbars from './components/navbars/IndexNavbars'
// import LandingPage from './layouts/LandingPage'
import '/src/assets/styles/App.css'
import Home from './components/landingpages/Home'
import SearchPath from './components/landingpages/SearchPath'
import Features from './components/landingpages/Features'
import Feedback from './components/landingpages/Feedback'
import { FooterWithSocialLinks } from './components/footer/Footers'
function App() {
  return (
    <>
    {/* <div className='relative mt-24'>
      <LandingPage/>
    </div>  */}

    <div>
      <IndexNavbars/>
      <Home/>
      <SearchPath/>
      <Features/>
      <Feedback/>
      <FooterWithSocialLinks/>
    </div>
     
    </>
  )
}

export default App
