<template>
  <header>
    <Navbar />
  </header>
  <main>
    <slot />
  </main>
</template>

<script>

import Navbar from "~~/components/Navbar.vue";
export default {
  setup() {
    return {};
  },
  components: { Navbar }
}
</script>

<style scoped>

</style>




