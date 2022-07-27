<template>
  <div style="margin: 20px">
    <g-pager :total-page="20" :current-page.sync="currentPage"></g-pager>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {},
};
</script>
<style scoped lang="scss"></style>
