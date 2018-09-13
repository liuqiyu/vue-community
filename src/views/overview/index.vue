<template>
  <div class="overvierw">
    <header class="flex-row o-header">
      <div>
        <el-select v-model="form.class_id" placeholder="请选择分类" size="mini" @change="getData">
          <el-option
            v-for="item in classOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        <el-select v-model="form.tag_id" placeholder="请选择标签" size="mini" @change="getData">
          <el-option
            v-for="item in tagOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        <el-radio-group v-model="form.list_status" size="mini"
                        v-if="this.$store.state.common.logined" @change="getData">
          <el-radio-button label="1">所有</el-radio-button>
          <el-radio-button label="2">我的</el-radio-button>
        </el-radio-group>
      </div>
      <el-button
        v-if="this.$store.state.common.logined"
        plain size="mini" icon="el-icon-plus"
        @click="report">发新文章</el-button>
    </header>
    <section class="o-section">
      <el-table
        :data="tableData"
        class="main-table"
        style="width: 100%">
        <el-table-column
          prop="art_name"
          label="主题"
          class-name="title"
          :show-overflow-tooltip="true"
          width="600">
          <template slot-scope="scope">
            <span @click="toPage(scope.row)">{{scope.row.art_name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="class_name"
          label="分类"
          width="100">
          <template slot-scope="scope">
            <div class="td-class">
              <i v-if="scope.row.class_id === 1" style="background-color: #92278F"></i>
              <i v-else style="background-color: #3AB54A"></i>
              <span>{{ scope.row.class_name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="tag_name"
          label="标签"
          width="100">
          <template slot-scope="scope">
            <span class="td-tag">{{ scope.row.tag_name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户"
          width="100">
          <template slot-scope="scope">
            <span class="username" :style="{ background: randomColor() }">
              {{ scope.row.username.toUpperCase().slice(0, 1) }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          prop="update_date"
          label="更新时间"
          width="100">
        </el-table-column>
        <el-table-column
          header-align="center"
          prop="create_date"
          label="创建时间"
          width="100">
        </el-table-column>
      </el-table>
    </section>
    <Create ref="create"
            :classOptions="classOptions"
            :tagOptions="tagOptions" @getData="getData"></Create>
  </div>
</template>

<script>
import Create from './create';
import overview from './../../api/overview';
import { randomColor } from './../../common/utils';

export default {
  mounted() {
    this.getData();
    this.getClass();
    this.getTag();
  },
  data() {
    return {
      form: {
        class_id: '',
        tag_id: '',
        list_status: 1,
      },
      classOptions: [],
      tagOptions: [],
      tableData: [],
      color: randomColor(),
    };
  },
  components: {
    Create,
  },
  methods: {
    getData() {
      overview.getArtList(1, 20, this.form).then((res) => {
        if (res.data.code === 200) {
          if (res.data.data.length > 0) {
            this.tableData = res.data.data;
          } else {
            this.tableData = [];
          }
        }
      });
    },
    getClass() {
      overview.getClass().then((res) => {
        if (res.data.code === 200) {
          this.classOptions = res.data.data;
        }
      });
    },
    getTag() {
      overview.getTag().then((res) => {
        if (res.data.code === 200) {
          this.tagOptions = res.data.data;
        }
      });
    },
    report() {
      this.$refs.create.openCreate();
    },
    toPage(item) {
      this.$router.push({
        path: `/page/${item.art_id}`,
      });
    },
  },
};
</script>

<style scoped lang="less">
  .o-header {
    padding-bottom: 15px;
    border-bottom: 2px solid #eee
  }

  .o-section {
    padding: 10px 0;
  }

  .td-class {
    position: relative;
    padding-left: 10px;
    i {
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -8px;
      display: block;
      width: 5px;
      height: 15px;
    }
  }
  .username {
    position: absolute;
    top: 50%;
    margin-top: -15px;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    border-radius: 50%;
    display: block;
    width: 30px;
    height: 30px;
    color: #fff;
  }
</style>
