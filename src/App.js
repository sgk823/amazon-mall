import React, {Fragment} from "react"
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'

import 'reset.css'
import './styles/reset.scss'
import './styles/global.scss'


export default function App(props){
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}
