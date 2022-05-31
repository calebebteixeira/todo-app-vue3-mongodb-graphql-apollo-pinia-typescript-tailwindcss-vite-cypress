<script setup lang="ts">
function toggleMode() {
  document.querySelector('html').classList.toggle('dark')
}
</script>

<template>
  <button
    @click="toggleMode"
    class="mode bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20"
  ></button>
</template>
