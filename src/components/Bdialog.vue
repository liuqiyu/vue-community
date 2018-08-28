<template>
  <div class="dialog-wrapper">
    <el-dialog
      :width="dialogWidth"
      :title="dialogTitle"
      :visible="dialogVisible"
      :before-close="handleClose"
    >
      <div class="dialog-body">
        <slot name="body"></slot>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: false,
    dialogTitle: null,
    dialogWidth: 0,
  },
  methods: {
    handleClose() {
      this.$bus.emit('closeDialog');
    },
  },
};
</script>

<style scoped>

</style>
