import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    time: {
        hour: 8,
        minute: 0,
        second: 5
    },
    num: 9
  },
  mutations: {
    changeTime(state) {
        setInterval(() => {
            let date = new Date()
            let hour = date.getHours() + 1
            let minute = 59 - date.getMinutes()
            let second = 59 - date.getSeconds()
            hour = 7 - (hour-1) % 8
            state.time= {
                hour,
                minute,
                second
            }
            state.num = state.num <= 0 ? 9 : --state.num
        }, 100)
    }
  },
  actions: {

  }
})
