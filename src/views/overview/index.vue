<template>
  <div class="overvierw">
    <header class="flex-row o-header">
      <div>
        <el-select v-model="value" placeholder="请选择分类" size="mini">
          <el-option
            v-for="item in classOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        <el-select v-model="value" placeholder="请选择标签" size="mini">
          <el-option
            v-for="item in tagOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
      <el-button
        v-if="this.$store.state.common.logined"
        plain size="mini" icon="el-icon-plus"
        @click="report">发新文章</el-button>
    </header>
    <section class="o-section">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="art_name"
          label="主题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="class_name"
          label="分类"
          width="180">
        </el-table-column>
        <el-table-column
          prop="tag_name"
          label="标签">
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户">
        </el-table-column>
        <el-table-column
          prop="update_date"
          label="更新时间">
        </el-table-column>
        <el-table-column
          prop="create_date"
          label="创建时间">
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

export default {
  mounted() {
    this.getData();
    this.getClass();
    this.getTag();
  },
  data() {
    return {
      value: '',
      classOptions: [],
      tagOptions: [],
      tableData: [],
    };
  },
  components: {
    Create,
  },
  methods: {
    getData() {
      overview.getArtList().then((res) => {
        if (res.data.code === 200) {
          if (res.data.data.length > 0) {
            this.tableData = res.data.data;
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
  },
};
</script>

<style scoped lang="less">
  .o-header {
    padding-bottom: 15px;
    border-bottom: 2px solid #eee
  }

  .o-section {
    padding: 10px 3px;
  }
</style>
