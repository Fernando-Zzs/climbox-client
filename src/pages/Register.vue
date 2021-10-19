<template>
  <div class="Register-wrap">
    <el-scrollbar style="height: 100%">
      <div class="ms-register">
        <div class="ms-title">注册</div>
        <el-form :model="registerForm" :rules="rules" ref="registerForm">
          <el-form-item prop="username" label="用户名">
            <el-input
              v-model="registerForm.username"
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input
              type="password"
              v-model="registerForm.password"
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别">
            <el-radio-group v-model="registerForm.sex">
              <el-radio :label="0">女</el-radio>
              <el-radio :label="1">男</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="phonenumber" label="手机">
            <el-input
              v-model="registerForm.phonenumber"
              placeholder="手机"
            ></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input
              v-model="registerForm.email"
              placeholder="邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item prop="birthday" label="生日">
            <el-date-picker
              v-model="registerForm.birthday"
              placeholder="选择日期"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item prop="introduction" label="签名">
            <el-input
              v-model="registerForm.introduction"
              placeholder="签名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="location" label="地区">
            <el-select
              v-model="registerForm.location"
              placeholder="地区"
              style="width: 100%"
            >
              <el-option
                v-for="item in cities"
                v-bind:key="item.value"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <div class="register-btn">
            <el-button type="primary" @click="goback(-1)">取消</el-button>
            <el-button type="primary" @click="Signup">注册</el-button>
          </div>
        </el-form>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { rules, cities } from "../assets/data/form";
import { mixin } from "../mixins/index";
import { SignUp } from "../api/index";
export default {
  name: "sign-up",
  mixins: [mixin],

  data() {
    return {
      registerForm: {
        username: "",
        password: "",
        sex: "",
        phonenumber: "",
        email: "",
        birthday: "",
        location: "",
        introduction: "",
      },
      cities: [],
      rules: {},
    };
  },
  created() {
    this.rules = rules;
    this.cities = cities;
  },
  methods: {
    Signup() {
      let _this = this;
      let d = this.registerForm.birthday;
      let datetime =
        d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      let params = new URLSearchParams();
      params.append("username", this.registerForm.username);
      params.append("password", this.registerForm.password);
      params.append("sex", this.registerForm.sex);
      params.append("phoneNum", this.registerForm.phoneNum);
      params.append("email", this.registerForm.email);
      params.append("birth", datetime);
      params.append("introduction", this.registerForm.introduction);
      params.append("location", this.registerForm.location);
      params.append("avatar", "/img/user.jpg");
      SignUp(params)
        .then((res) => {
          if (res.code == 1) {
            _this.notify("注册成功", "success");
            setTimeout(function () {
              _this.$router.push({ path: "/" });
            }, 2000);
          } else {
            _this.notify("注册失败", "error");
          }
        })
        .catch((err) => {
          _this.notify("注册失败", "error");
        });
    },
    goback(index) {
      this.$router.go(index);
    },
  },
};
</script>


<style scoped>
.Register-wrap {
  position: relative;
  background: url("../assets/img/575e8b7e45e2ed9d41cd9d3fcc89cb0.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.ms-title {
  position: relative;
  /* top: 50%;
  width: 100%;
  margin-top: -230px; */
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: rgb(196, 182, 182);
}
.ms-register {
  position: absolute;
  left: 50%;
  top: 350px;
  width: 300px;
  height: 850px;
  margin-left: -190px;
  margin-top: -150px;
  padding: 40px;
  border-radius: 5px;
  background: #00000090;
}
.register-btn {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  float: none;
}
.el-button--primary {
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
}
div /deep/ .el-input__inner {
  background-color: #00000090;
  border: 1px solid #00000090;
  color: white;
}
div /deep/ input::-webkit-input-placeholder {
  color: white;
}
.register-btn button {
  width: 100%;
  height: 36px;
}
</style>