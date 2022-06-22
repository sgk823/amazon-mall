import React, {Component} from "react"
import styleSheet from './index.module.scss'



const {
  backTop,
  present,
  navLink,
} = styleSheet


class Footer extends Component {
  render(){
    return (
      <footer>
        <div className={backTop}><a href="#">回到顶部</a></div>
        <div className={present}>
          <div>
            <dl>
              <dt>了解我们</dt>
              <dd><a href="">人才招聘</a></dd>
              <dd><a href="">亚马逊科学</a></dd>
            </dl>
            <dl>
              <dt>合作信息</dt>
              <dd><a href="">我要开店</a></dd>
              <dd><a href="">加入联盟</a></dd>
            </dl>
            <dl>
              <dt>帮助中心和购物指南</dt>
              <dd><a href="">付款和退款</a></dd>
              <dd><a href="">退货和换货</a></dd>
              <dd><a href="">帮助中心</a></dd>
            </dl>
          </div>
          <div>
            <p><a href=""><img src="" alt="" /></a></p>
            <p>
              <a href="">美国/地区</a><a href="">加拿大</a><a href="">巴西</a>
              <a href="">墨西哥</a><a href="">英国/地区</a><a href="">法国/地区</a>
              <a href="">意大利</a><a href="">西班牙</a><a href="">德国/地区</a>
              <a href="">日本</a><a href="">印度</a><a href="">亚马逊家族网站: Shopbop</a>
            </p>
          </div>
        </div>
        <div className={navLink}>
          <p>
            <a href="">互联网药品信息服务资格证书(京)-非经营性-2012-0005</a>
            <a href="">&nbsp;京公网安备11010502030232号&nbsp;</a><a href="">京ICP备11014788号</a>
          </p>
          <p>
            <a href="">增值电信业务经营许可证:合字B2-20090004</a>
            <a href="">&nbsp;营业执照:91110000717883277U&nbsp;</a><a href="">出版物经营许可证</a>
          </p>
          <p><a href="">使用条件</a>&nbsp;<a href="">隐私声明</a>&nbsp;© 1996-2022，Amazon.com, Inc.或其附属公司</p>
        </div>
      </footer>
    )
  }
}


export default Footer
