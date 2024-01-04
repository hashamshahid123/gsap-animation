import './App.css'
import CatForm from './components/CatForm/CatForm'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Horizantal from './components/Horizantal/Horizantal'
import Marquee from './components/Marquee/Marquee'
import RevealImg from './components/RevealImg/RevealImg'
import ScrollImg from './components/ScrollImg/ScrollImg'
import ScrollText from './components/ScrollText/ScrollText'

function App() {
  return (
    <>
      <Header />
      <ScrollText />
      <Form />
      <ScrollImg />
      <RevealImg />
      <Horizantal />
      <Marquee />
      <CatForm />
      <Footer />
    </>
  )
}

export default App
