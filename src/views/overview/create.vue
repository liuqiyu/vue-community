<template>
  <div class="create_modal" ref="create_modal">
    <div class="wrap m-auto body">
      <header>
        <h2>创建新的主题</h2>
        <span class="toggler" @click="closeCreate">
          <span class="el-icon-arrow-down"></span>
        </span>
      </header>
      <section class="article">
        <div class="header">
          <div class="h-item art_name">
            <el-input
              size="small"
              placeholder="请输入标题"
              suffix-icon="el-icon-search"
              v-model="form.art_name">
            </el-input>
          </div>
          <div class="h-item">
            <el-select v-model="form.class_id" placeholder="请选择类型" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="h-item">
            <el-select v-model="form.tag_id" placeholder="请选择标签" size="small">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="centent">
          <div class="areatxt">
            <mavon-editor v-model="form.art_text" style="height: 267px"/>
          </div>
          <footer>
            <el-button type="primary" size="mini" @click="create">创建主题</el-button>
            <el-button type="text" @click="closeCreate">取消</el-button>
          </footer>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import overview from './../../api/overview';

export default {
  data() {
    return {
      value: '',
      form: {
        art_name: '',
        class_id: '',
        tag_id: '',
        art_text: '',
      },
      options: [{
        value: '1',
        label: '黄金糕',
      }],
    };
  },
  methods: {
    create() {
      console.log(this.form);
      overview.createArticle(this.form).then((res) => {
        if (res.data.code === 200) {
          this.$message(res.data.message);
        }
      });
    },
    openCreate() {
      this.$refs.create_modal.classList.add('_height_400');
    },
    closeCreate() {
      this.$refs.create_modal.classList.remove('_height_400');
    },
  },
};
</script>

<style scoped lang="less">
.create_modal {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: #e9e9e9;
  transition: height 0.4s ease;
  z-index: 999;
  &._height_400 {
    height: 400px;
  }
  .body {
    position: relative;
    height: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    header {
      h2 {
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #08c;
      }
      .toggler {
        position: absolute;
        top: 10px;
        right: 0;
        width: 20px;
        height: 20px;
        font-size: 20px;
        font-weight: bold;
        color: rgba(0,0,0,.4);
        cursor: pointer;
      }
    }
    .article {
      position: relative;
      padding-top: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
      .header {
        flex: none;
        display: flex;
        margin-bottom: 10px;
        .h-item {
          margin-right: 20px;
          width: 150px;
        }
        .art_name {
          width: 400px;
        }
      }
      .centent {
        flex: 1;
        display: flex;
        flex-direction: column;
        .areatxt {
          flex: 1;
          height: 267px;
          .v-note-wrapper {
            min-height: 267px;
          }
        }
        footer {
          padding-top: 5px;
          flex: none;
        }
      }
      .art-name-alert {
        opacity: 0;
        position: absolute;
        top: -20px;
        left: 150px;
      }
      .class-alert {
        opacity: 0;
        position: absolute;
        top: -20px;
        left: 400px;
      }
      .tag-alert {
        opacity: 0;
        position: absolute;
        top: -20px;
        left: 650px;
      }
      .content-alert {
        opacity: 0;
        position: absolute;
        top: 100px;
        left: 40px;
      }
    }
  }
}
</style>
