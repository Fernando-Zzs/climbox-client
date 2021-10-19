<template>
  <div class="header">
    <div class="collapse-btn" @click="collapsechange">
      <i class="el-icon-menu"></i>
    </div>
    <div class="header-right">
      <div class="user-avator">
        <img src="../assets/img/4f5609cc22f2cd5bea553eee58c7311f.jpg" />
      </div>
      <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          {{ username }}
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout"> 退出登录 </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="register-btn" @click="register">
        <i class="el-icon-delete"></i>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../assets/js/bus";
export default {
  data() {
    return {
      collapse: false,
    };
  },
  computed: {
    username() {
      return localStorage.getItem("userName");
    },
  },
  methods: {
    handleCommand(command) {
      if (command == "logout") {
        localStorage.removeItem("username");
        this.$router.push("/");
      }
    },
    collapsechange() {
      this.collapse = !this.collapse;
      bus.$emit("collapse", this.collapse);
    },
    register() {
      this.$router.push("/Register");
    },
  },
  created() {
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
    });
  },
};
</script>

<style>
.header {
  position: relative;
  background-color: #253041;
  box-sizing: border-box;
  width: calc(100% - 150px);
  left: 150px;
  height: 70px;
  font-size: 22px;
  color: white;
  border: 1px solid rgba(255, 255, 255, 1);
}

.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}

.header-right {
  float: right;
  padding-right: 50px;
  display: flex;
  height: 70px;
  align-items: center;
}

.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-name {
  margin-left: 10px;
}

.el-dropdown-link {
  color: white;
  cursor: pointer;
}

.el-icon-user {
  font-size: 50px;
}

.register-btn {
  float: right;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
</style>