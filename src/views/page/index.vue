<template>
  <div v-html="markdownHtml"></div>
</template>

<script>
import overview from './../../api/overview';

export default {
  created() {
    this.getData();
  },
  data() {
    return {
      html: '',
    };
  },
  computed: {
    markdownHtml() {
      return marked(this.html, { sanitize: true });
    },
  },
  methods: {
    getData() {
      overview.getArtDetails(this.$route.params.id).then((res) => {
        if (res.data.code === 200) {
          this.html = res.data.data[0].art_text;
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
