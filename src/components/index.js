import TestHeader from './test-header'
import TestFooter from './test-footer'
import TestMain from './test-main'
import TestGlobal from './test-global'
import SvgIcon from '@/components/svg-icon'

export default{
    install(Vue){
        Vue.component('TestHeader',TestHeader)
        Vue.component('TestFooter',TestFooter)
        Vue.component('TestMain',TestMain)
        Vue.component('TestGlobal',TestGlobal)
        Vue.component('SvgIcon',SvgIcon)
    }
}