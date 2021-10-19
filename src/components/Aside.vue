<template>
  <div class="sidebar">
      <el-menu class="sidebar-el-menu" 
      :default-active="onRoutes" 
      :collapse='collapse' 
      background-color="#11101d" 
      text-color="white" 
      active-text-color="skyblue" 
      router
      > 
      <template v-for="item in items">
        <template>
            <el-menu-item :index="item.index" :key='item.index' >
                <i :class="item.icon"></i>
                <span v-show="collapse===false">{{item.title}}</span>
            </el-menu-item>
        </template>
      </template>
          
      </el-menu>
  </div>
</template>

<script>

import bus from '../assets/js/bus'

export default {
    data() {
        return {
            collapse:false,
            items:[
                {
                    icon: 'el-icon-document',
                    index: 'Info',
                    title: '大牛广场'
                },
                {
                    icon: 'el-icon-document',
                    index: 'Consumer',
                    title: '我的自选股'
                },
                {
                    icon: 'el-icon-document',
                    index: 'Singer',
                    title: '我的关注'
                },
                {
                    icon: 'el-icon-document',
                    index: 'SongList',
                    title: '个人中心'
                },
            ]
        }
    },

    computed:{
        onRoutes(){
            return this.$route.path.replace('/','')
        }
    },
    created() {
        bus.$on('collapse',msg =>{
            this.collapse=msg
        })
    },
}
</script>

<style scoped>
.sidebar{
    display: block;
    position: absolute;
    left: 0;
    top:70px;
    bottom: 0;
    background-color:#11101d ;
    overflow-y: scroll;
}

.sidebar::-webkit-scrollbar{
    width: 0;
}

.sidebar-el-menu{
     display: flex;
   flex-direction: column;
   justify-content: space-between;
}

.sidebar-el-menu:not(.el-menu--collapse){
   width:150px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
}


.sidebar >ul{
    height: 100%;
}
</style>