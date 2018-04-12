import Vue from 'vue'
import Router from 'vue-router'
import variousShapes from '@/components/variousShapes'
import visualEffect from '@/components/visualEffect'
import font from '@/components/font'
import userOptimization from '@/components/userOptimization'
import StructureAndLayout from '@/components/StructureAndLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'various shapes',
      component: variousShapes
    },
    {
      path: '/visualEffect',
      name: 'visual effect',
      component: visualEffect
    },
    {
      path: '/font',
      name: 'font',
      component: font
    },
    {
      path: '/userOptimization',
      name: 'userOptimization',
      component: userOptimization
    },
    {
      path: '/structureAndLayout',
      name: 'structureAndLayout',
      component: StructureAndLayout
    },
    {
      path: '/transitionAndAnimate',
      name: 'transitionAndAnimate',
      component: () => import('@/components/TransitionAndAnimate')
    }
  ]
})
