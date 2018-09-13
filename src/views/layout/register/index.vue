<template>
  <el-dialog
    title="注册"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    :append-to-body="true"
    :visible="registerDialogVisible"
    width="500px"
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
                    @keyup.enter.native="register('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"
                    @keyup.enter.native="register('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password1">
          <el-input type="password" v-model="ruleForm.password1"
                    @keyup.enter.native="register('ruleForm')"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose" size="mini">取 消</el-button>
    <el-button type="primary" size="mini" @click="register('ruleForm')">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import user from './../../../api/user';

export default {
  props: {
    registerDialogVisible: false,
  },
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
        password1: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        password1: [
          { required: true, message: '请确认密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleClose() {
      this.$emit('closeRegister');
    },
    register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          user.register(this.ruleForm).then((res) => {
            if (res.data.code === 200) {
              this.$message({
                message: res.data.message,
                type: 'success',
              });
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
