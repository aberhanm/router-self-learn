<template>
  <div>
    <transition name="form-fade" mode="in-out">
      <section class="from_container" v-show="showLogin">
        <div class="manage_tip">
          <p>后台管理系统</p>
        </div>
        <el-form v-model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>
<script>

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      showLogin: true
    };
  },

  methods: {
   submitForm(loginForm){
     	this.$router.push('manage')
   }
  }
};
</script>
<style scoped>
.from_container {
  width: 50%;
  height: 500px;
  margin: 0 auto;
}
</style>
