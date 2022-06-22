import React, { Component } from "react"
import Swiper from "../swiper"
import Card from "../card"
import styleSheet from './index.module.scss'

import image from './imgs/61m.jpg'


const {
  container,
  banner,
  content,

} = styleSheet

class Main extends Component {
  render() {
    return (
      <main className={container}>
        <div className={banner}>
          <Swiper>
            <div className="swiper-slide">
              <a href="#"><img src={image} alt="" height='600' width='1500'/></a>
            </div>
          </Swiper>
        </div>
        <div className={content}>
          <div>
            {
              [0,0,0,0,0,0,0,0].map(_=><Card />)
            }
          </div>
          <div></div>
          <div>
            {
              [0,0,0,0,0,0,0,0,0,0,0,0,].map(_=><Card />)
            }
          </div>
        </div>
        <div>

        </div>
      </main>
    )
  }
}

export default Main