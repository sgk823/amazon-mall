import React, { Component } from "react"
import Input from "../input"

import styleSheet from './index.module.scss'

const {
  topbar,
  navbar,

} = styleSheet

class Header extends Component {
  render() {
    return (
      <header>
        <div className={topbar}>
          <div></div>
          <Input />
          <div>
            <ul>
              <li>
                <span>您好,登录</span><br /><span>账户及列表<i></i></span>
              </li>
              <li>
                <span>退货</span><br /><span>与我的订单</span>
              </li>
              <li><div><span>0</span></div><span>购物车</span></li>
            </ul>
          </div>
        </div>
        <div className={navbar}>
          <nav>
            <ul>
              <li><a href=""><i></i>全部</a></li>
              <li><a href="">镇店之宝</a></li>
              <li><a href="">Prime<i></i></a></li>
              <li><a href="">优惠劵</a></li>
              <li><a href="">新品发布</a></li>
              <li><a href="">奥莱折扣</a></li>
              <li><a href="">Kindle电子书</a></li>
              <li><a href="">全球开店</a></li>
              <li><a href="">客户服务</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
