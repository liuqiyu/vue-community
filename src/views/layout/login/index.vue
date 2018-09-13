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
          <el-input v-model="ruleForm.username"
                    @keyup.enter.native="logins('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password"
                    v-model="ruleForm.password"
                    @keyup.enter.native="logins('ruleForm')"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose" size="mini">取 消</el-button>
    <el-button type="primary" size="mini" @click="logins('ruleForm')">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import { mapActions } from 'vuex';

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
    ...mapActions([
      'login',
    ]),
    handleClose() {
      this.$emit('closeLogin');
    },
    logins(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login(this.ruleForm).then((res) => {
            this.$emit('closeLogin');
            this.$message({
              message: res,
              type: 'success',
            });
          }).catch((error) => {
            this.$message({
              message: error,
              type: 'error',
            });
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
