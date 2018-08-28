<template>
  <el-dialog
    title="登录"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    :append-to-body="true"
    :visible="loginDialogVisible"
    width="30%"
    :before-close="handleClose">
    <div class="d-body">
      <el-form
        :model="ruleForm"
        :rules="rules"
        size="small"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose" size="mini">取 消</el-button>
    <el-button type="primary" size="mini" @click="login('ruleForm')">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import user from './../../../api/user';

export default {
  props: {
    loginDialogVisible: false,
  },
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleClose() {
      this.$emit('closeLogin');
    },
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          user.login(this.ruleForm).then((res) => {
            if (res.data.code === 200) {
              this.$message({
                message: res.data.message,
                type: 'success',
              });
              window.localStorage.setItem('userInfo', JSON.stringify(res.data.data));
            } else {
              this.$message({
                message: res.data.message,
                type: 'error',
              });
            }
            this.$emit('closeRegister');
          });
        } else {
          return false;
        }
        return true;
      });
    },
  },
};
</script>

<style scoped>

</style>
