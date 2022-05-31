<script setup lang="ts">
import { Tech } from '../types'
const props = defineProps<{ tech: Tech }>()
</script>
<template>
  <div class="flex">
    <div class="flex rounded-lg bg-white dark:bg-gray-900 p-8 w-full">
      <a
        :href="props.tech.link"
        target="_blank"
        class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-brand-primary flex-shrink-0"
      >
        <img :src="props.tech.icon" :alt="props.tech.title" class="p-3" />
      </a>
      <div class="flex-grow">
        <a :href="props.tech.link" target="_blank" class="hover:underline">
          <h2 class="text-lg title-font font-medium mb-3">
            {{ props.tech.title }}
          </h2>
        </a>
        <p class="leading-relaxed dark:color-gray-400">{{ props.tech.text }}</p>
      </div>
    </div>
  </div>
</template>
