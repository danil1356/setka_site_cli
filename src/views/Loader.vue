<template>

</template>

<script>
import router from "@/router";

export default {
  name: "Loader",

  mounted() {
    this.$nextTick(async ()=>{
      await router.push({name: "app"});
    })
  }
}
</script>

<style scoped>

</style>
