<template>
  <div class="smallbox">
      <div class="collapse-btn" @click="collapsechange">
       <i class="element-icons el-iconniu"></i> 
      </div>
      <div class="logo">爬牛</div>
  </div>
</template>

<script>
export default {
methods: {
  collapsechange(){
      this.collapse=!this.collapse;
      bus.$emit('collapse',this.collapse)
    },
},
}
</script>

<style>
.smallbox{
  position: absolute;
  background-color:#11101d;
  box-sizing: border-box;
  width: 150px;
  top:0px;
  height: 70px;
  font-size: 22px;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
}

.el-iconniu{
    font-size: 30px;
}
.smallbox .logo{
  position: relative;
  float: left;
  line-height: 70px;
}
</style>