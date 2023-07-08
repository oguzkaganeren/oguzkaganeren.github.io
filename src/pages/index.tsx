import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Header from './../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <Intro/>
      <Footer/>
    </>
  )
}

export default Home
