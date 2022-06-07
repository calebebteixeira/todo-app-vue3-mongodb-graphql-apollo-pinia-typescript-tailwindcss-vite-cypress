<script setup lang="ts">
import { useTechStore } from '../stores/techs'
import TechListItem from './TechListItem.vue'
const techs = useTechStore()
</script>
<template>
  <section id="technologies" class="bg-gray-100 dark:bg-gray-800">
    <div class="container px-5 py-16 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <p
          class="text-xs text-brand-primary tracking-widest font-medium title-font mb-1"
        >
          Technologies
        </p>
        <h1 class="sm:text-3xl text-2xl font-medium title-font">
          This todo app was built with:
        </h1>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 -m-4">
        <TechListItem
          v-for="(tech, index) of techs.items"
          :key="index"
          :tech="tech"
        ></TechListItem>
      </div>
    </div>
  </section>
</template>
