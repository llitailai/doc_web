import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Message, Container, Header, Aside, Main
} from 'element-ui'

import TimeLine from './timeline/index'
import TimelineItem from './timeline-item/index'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(TimeLine)
Vue.use(TimelineItem)

Vue.prototype.$message = function (msg) {
  Message(msg)
}
Vue.prototype.$message = function (msg) {
  return Message({
    message: msg,
    duration: 2000
  })
}
Vue.prototype.$message.success = function (msg) {
  return Message.success({
    message: msg,
    duration: 1500
  })
}
Vue.prototype.$message.warning = function (msg) {
  return Message.warning({
    message: msg,
    duration: 1000
  })
}
