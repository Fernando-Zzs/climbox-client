<template>
  <div>
      <Header></Header>
      <Smallbox></Smallbox>
      <Aside></Aside>
      <div class="content-box" :class="{'content-collapse':collapse}">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Aside from './Aside.vue'
import bus from '../assets/js/bus'
import Smallbox from './Smallbox.vue'
export default {
    components:{
        Header,Aside,
        Smallbox
    },
    data() {
        return {
            collapse:false
        }
    },
    created() {
        bus.$on('collapse',msg =>{
            this.collapse=msg
    })
    }
}
</script>

<style>

</style>