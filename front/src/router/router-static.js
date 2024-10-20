import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import baoxiu from '@/views/modules/baoxiu/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fangyuan from '@/views/modules/fangyuan/list'
    import fangyuanCommentback from '@/views/modules/fangyuanCommentback/list'
    import fangyuanOrder from '@/views/modules/fangyuanOrder/list'
    import fangyuanYuyue from '@/views/modules/fangyuanYuyue/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import liuyan from '@/views/modules/liuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zufanghetong from '@/views/modules/zufanghetong/list'
    import config from '@/views/modules/config/list'
    import dictionaryBaoxiu from '@/views/modules/dictionaryBaoxiu/list'
    import dictionaryBaoxiuZhuangtai from '@/views/modules/dictionaryBaoxiuZhuangtai/list'
    import dictionaryFangyuan from '@/views/modules/dictionaryFangyuan/list'
    import dictionaryFangyuanOrder from '@/views/modules/dictionaryFangyuanOrder/list'
    import dictionaryFangyuanYuyueYesno from '@/views/modules/dictionaryFangyuanYuyueYesno/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBaoxiu',
        name: '报修类型',
        component: dictionaryBaoxiu
    }
    ,{
        path: '/dictionaryBaoxiuZhuangtai',
        name: '报修状态',
        component: dictionaryBaoxiuZhuangtai
    }
    ,{
        path: '/dictionaryFangyuan',
        name: '房源类型',
        component: dictionaryFangyuan
    }
    ,{
        path: '/dictionaryFangyuanOrder',
        name: '订单类型',
        component: dictionaryFangyuanOrder
    }
    ,{
        path: '/dictionaryFangyuanYuyueYesno',
        name: '报名状态',
        component: dictionaryFangyuanYuyueYesno
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/baoxiu',
        name: '报修',
        component: baoxiu
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fangyuan',
        name: '租房房源',
        component: fangyuan
      }
    ,{
        path: '/fangyuanCommentback',
        name: '租房评价',
        component: fangyuanCommentback
      }
    ,{
        path: '/fangyuanOrder',
        name: '房源租赁',
        component: fangyuanOrder
      }
    ,{
        path: '/fangyuanYuyue',
        name: '租房预约',
        component: fangyuanYuyue
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/liuyan',
        name: '投诉建议',
        component: liuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zufanghetong',
        name: '租房合同',
        component: zufanghetong
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
