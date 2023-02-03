<template>
  <div>
    <Navbar />
  </div>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
import Navbar from "~~/components/Navbar.vue";
export default {
  setup() {


    return {}
  },
  components: { Navbar }
}
</script>

<style scoped>

</style>