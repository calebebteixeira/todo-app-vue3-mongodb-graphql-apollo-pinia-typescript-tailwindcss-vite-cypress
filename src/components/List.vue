<script setup lang="ts">
import { Task } from '../types'
import ListItem from './ListItem.vue'
const props = defineProps<{ tasks: Task[] }>()
</script>
<template>
  <div class="divide-y-2 divide-gray-100 md:mb-8 dark:divide-gray-800">
    <ListItem
      v-for="task of props.tasks"
      :key="task.id"
      :task="task"
    ></ListItem>
  </div>
</template>
