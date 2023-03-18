import banner from '../assets/banner_image.png'
import project_one from '../assets/project_1.png'
import project_two from '../assets/project_2.png'
import project_three from '../assets/project_3.png'
import comet_one from '../assets/comet_1.svg'
import comet_two from '../assets/comet_2.svg'
import comet_three from '../assets/comet_3.svg'
import comet_four from '../assets/comet_4.svg'
import facebook from '../assets/icon_fb.svg'
import twitter from '../assets/icon_tw.svg'
import NavBar from '../components/NavBar'
import Welcome from '../components/Welcome'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <NavBar />
      <Welcome />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
export default Home
