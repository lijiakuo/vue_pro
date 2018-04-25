import Vue from 'vue'
import axios from 'axios'
import jsonp from 'jsonp'
const tools = {
    install() {
        Object.defineProperty(Vue.prototype, '$http', {
            value: axios
        })
        Object.defineProperty(Vue.prototype, '$jsonp', {
            value: jsonp
        })
    }
}
export default tools