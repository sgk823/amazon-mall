import React from "react"


function Swiper(props) {

  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        {props.children}
      </div>

      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  )
}

export default Swiper
