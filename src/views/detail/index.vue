<template>
  <div>
    景点详情{{id}}
  </div>
</template>
<script>
export default {
  name: 'detail',
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    getdata () {
      this.axios.get().then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      }) // 根据景点ID去请求对应的的景点详情
    }
  }
}
</script>
