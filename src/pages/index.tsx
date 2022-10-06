import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import MediumArticles from '../components/MediumArticles'
import styles from '../styles/Home.module.css'
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
