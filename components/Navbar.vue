<template>
  <div class="bg-indigo-50 shadow-xl">
    <nav class="grid grid-cols-6 content-center h-20">
      <div class="col-start-2">
        <NuxtLink to="/">
          <h1 class="text-3xl text-black">Website Name(HOME)</h1>
        </NuxtLink>
      </div>
      <div class="flex col-start-4 gap-10">
        <NuxtLink to="/collections">
          <h2 class="text-2xl">Collections</h2>
        </NuxtLink>
        <NuxtLink to="/market">
          <h2 class="text-2xl">Market</h2>
        </NuxtLink>
      </div>
      <div class="col-start-6 text-end pr-10">
        <h2 class="text-xl">Login/Create</h2>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style>
.router-link-exact-active {
  color: aquamarine;
}
</style>